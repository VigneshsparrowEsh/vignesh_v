import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const AMBER   = "#F5A623";
const BG      = "#0A0A0A";
const SURFACE = "#111111";
const BORDER  = "rgba(255,255,255,0.08)";

function PhotoFallback() {
  return (
    <div className="relative w-full group" style={{ height: 480 }}>
      <div className="absolute inset-0 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"
        style={{ background: `${AMBER}18` }} />
      <div className="absolute inset-0 border z-10 pointer-events-none" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
      <div className="w-full h-full overflow-hidden relative z-0">
        <img src="/vignesh.png" alt="Vignesh V"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ filter: "none" }} />
      </div>
    </div>
  );
}

export default function HeroCanvas() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      setFailed(true);
      return;
    }

    if (!renderer || !renderer.getContext()) {
      setFailed(true);
      renderer?.dispose();
      return;
    }

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const geometry = new THREE.IcosahedronGeometry(1.3, 1);

    const solidMat = new THREE.MeshPhongMaterial({
      color: 0xf5a623,
      transparent: true,
      opacity: 0.06,
      side: THREE.DoubleSide,
    });
    const solidMesh = new THREE.Mesh(geometry, solidMat);
    scene.add(solidMesh);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xf5a623,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(geometry, wireMat);
    scene.add(wireMesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xf5a623, 2.0, 12);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const particles: {
      mesh: THREE.Mesh;
      speed: number;
      offset: number;
      radius: number;
      y: number;
      yOffset: number;
    }[] = [];
    const particleGeo = new THREE.SphereGeometry(0.022, 6, 6);

    for (let i = 0; i < 80; i++) {
      const mat  = new THREE.MeshBasicMaterial({ color: 0xf5a623, transparent: true, opacity: 0.55 });
      const mesh = new THREE.Mesh(particleGeo, mat);
      particles.push({
        mesh,
        speed:   0.25 + Math.random() * 0.45,
        offset:  Math.random() * Math.PI * 2,
        radius:  1.8 + Math.random() * 0.7,
        y:       (Math.random() - 0.5) * 3.2,
        yOffset: Math.random() * Math.PI * 2,
      });
      scene.add(mesh);
    }

    let targetRotX  = 0, targetRotY  = 0;
    let currentRotX = 0, currentRotY = 0;
    const isMobile = "ontouchstart" in window;

    const onMouseMove = (e: MouseEvent) => {
      targetRotY = ((e.clientX / window.innerWidth)  - 0.5) *  2.0;
      targetRotX = ((e.clientY / window.innerHeight) - 0.5) * -1.5;
    };
    if (!isMobile) document.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!canvas) return;
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    let rafId: number;
    function animate() {
      rafId = requestAnimationFrame(animate);
      const t   = Date.now() * 0.0003;
      const now = Date.now() * 0.001;

      if (isMobile) {
        solidMesh.rotation.y += 0.007;
        wireMesh.rotation.y  += 0.007;
      } else {
        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;
        solidMesh.rotation.x = currentRotX;
        solidMesh.rotation.y = currentRotY + t;
        wireMesh.rotation.x  = currentRotX;
        wireMesh.rotation.y  = currentRotY + t;
      }

      particles.forEach((p) => {
        p.mesh.position.x = Math.cos(now * p.speed + p.offset) * p.radius;
        p.mesh.position.z = Math.sin(now * p.speed + p.offset) * p.radius;
        p.mesh.position.y = p.y + Math.sin(now * 0.5 + p.yOffset) * 0.28;
      });

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      solidMat.dispose();
      wireMat.dispose();
      particleGeo.dispose();
    };
  }, []);

  if (failed) return <PhotoFallback />;

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      className="w-full block"
      style={{ height: 480 }}
    />
  );
}
