"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting (Warm Orange & Amber)
    const ambientLight = new THREE.AmbientLight(0xff9800, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xf97316, 2, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xfbbf24, 1.5, 100);
    pointLight2.position.set(-20, -20, 10);
    scene.add(pointLight2);

    // 3. Floating 3D Geometries (Server & Architecture Nodes)
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    // Wireframe Icosahedron (Main Core)
    const coreGeo = new THREE.IcosahedronGeometry(7, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      roughness: 0.3,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    nodeGroup.add(coreMesh);

    // Inner glowing octahedron
    const innerGeo = new THREE.OctahedronGeometry(4, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    nodeGroup.add(innerMesh);

    // Outer Torus Ring
    const torusGeo = new THREE.TorusGeometry(12, 0.15, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 3;
    nodeGroup.add(torusMesh);

    // 4. Code / Tech Floating Text Sprites
    const codeSymbols = ["</>", "{ }", "PHP", "Laravel", "SQL", "API", "=>", "010101", "DB", "OOP"];
    const spriteGroup = new THREE.Group();
    scene.add(spriteGroup);

    function createTextTexture(text: string) {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = "Bold 44px 'JetBrains Mono', monospace";
        ctx.fillStyle = "rgba(251, 191, 36, 0.75)";
        ctx.shadowColor = "#f97316";
        ctx.shadowBlur = 12;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, 128, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    }

    const sprites: { sprite: THREE.Sprite; initialY: number; speed: number }[] = [];
    codeSymbols.forEach((symbol, i) => {
      const texture = createTextTexture(symbol);
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.65,
      });
      const sprite = new THREE.Sprite(spriteMat);
      
      const radius = 16 + Math.random() * 14;
      const theta = (i / codeSymbols.length) * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      sprite.position.set(
        radius * Math.cos(theta) * Math.cos(phi),
        radius * Math.sin(phi),
        radius * Math.sin(theta) * Math.cos(phi)
      );
      sprite.scale.set(6, 3, 1);

      spriteGroup.add(sprite);
      sprites.push({
        sprite,
        initialY: sprite.position.y,
        speed: 0.5 + Math.random() * 0.5,
      });
    });

    // 5. Particles Cloud
    const particleCount = 180;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 80;
      particlePositions[i + 1] = (Math.random() - 0.5) * 80;
      particlePositions[i + 2] = (Math.random() - 0.5) * 60;
    }

    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0xf97316,
      size: 0.4,
      transparent: true,
      opacity: 0.6,
    });

    const particleSystem = new THREE.Points(particlesGeo, particleMat);
    scene.add(particleSystem);

    // 6. Interactive Mouse Movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 7. Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 4;
      camera.position.y = -targetY * 4;
      camera.lookAt(scene.position);

      // Rotate central 3D nodes
      coreMesh.rotation.x = elapsedTime * 0.15;
      coreMesh.rotation.y = elapsedTime * 0.2;
      innerMesh.rotation.x = -elapsedTime * 0.25;
      innerMesh.rotation.y = -elapsedTime * 0.3;
      torusMesh.rotation.z = elapsedTime * 0.1;

      // Rotate sprite group & float
      spriteGroup.rotation.y = elapsedTime * 0.08;
      sprites.forEach((item, index) => {
        item.sprite.position.y =
          item.initialY + Math.sin(elapsedTime * item.speed + index) * 0.8;
      });

      // Slowly rotate particle cloud
      particleSystem.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-70"
    />
  );
}
