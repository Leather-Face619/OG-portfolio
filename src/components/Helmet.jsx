
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';
import gsap from 'gsap';

export default function Helmet({
  modelUrl = './3D-model/DamagedHelmet.gltf',
  hdriUrl = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/rogland_sunset_1k.hdr',
  rgbShiftAmount = 0.012,
  rgbShiftAngle = Math.PI / 4,
  className = '',
  style,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    let model = null;
    let disposed = false;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      35,
      width / height,
      0.1,
      100
    );

    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    // Post Processing
    const composer = new EffectComposer(renderer);

    composer.addPass(new RenderPass(scene, camera));

    const rgbShiftPass = new ShaderPass(RGBShiftShader);

    rgbShiftPass.uniforms.amount.value = rgbShiftAmount;
    rgbShiftPass.uniforms.angle.value = rgbShiftAngle;

    composer.addPass(rgbShiftPass);

    // HDRI
    const hdriLoader = new RGBELoader();

    hdriLoader.load(hdriUrl, (texture) => {
      if (disposed) {
        texture.dispose();
        return;
      }

      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
    });

    // Model
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(
      modelUrl,
      (gltf) => {
        if (disposed) return;

        model = gltf.scene;
        scene.add(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('Model loading error:', error);
      }
    );

    // Mouse interaction
    const handleMouseMove = (event) => {
      if (!model) return;

      const rect = container.getBoundingClientRect();

      const mouseX =
        (event.clientX - rect.left) / rect.width - 0.5;

      const mouseY =
        (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(model.rotation, {
        y: mouseX * Math.PI * 0.4,
        x: mouseY * Math.PI * 0.4,
        duration: 0.8,
        overwrite: true,
      });
    };

    // Responsive Resize
    const resizeObserver = new ResizeObserver(() => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      if (!newWidth || !newHeight) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      composer.setSize(newWidth, newHeight);
    });

    resizeObserver.observe(container);

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    renderer.setAnimationLoop(() => {
      composer.render();
    });

    // Cleanup
    return () => {
      disposed = true;

      container.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();

      renderer.setAnimationLoop(null);

      if (model) {
        gsap.killTweensOf(model.rotation);
        scene.remove(model);
      }

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();

        if (obj.material) {
          const materials = Array.isArray(obj.material)
            ? obj.material
            : [obj.material];

          materials.forEach((material) => material.dispose());
        }
      });

      if (scene.environment) scene.environment.dispose();

      composer.dispose();
      renderer.dispose();
    };

  }, [modelUrl, hdriUrl, rgbShiftAmount, rgbShiftAngle]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative ${className}`}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
}
