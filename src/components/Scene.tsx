import React, { Suspense } from "react";
import { Canvas as ThreeCanvas, useLoader } from "react-three-fiber";
import { Vector3, Euler } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import CameraRig from "./CameraRig";
import { getPositionFromScroll } from "../utils/utils";

const modelScale = new Vector3(2, 2, 2);

const CanvasContent = () => {
  const gltf = useLoader(GLTFLoader, "/models/alley/scene.gltf");
  return (
    <>
      <color attach="background" args={["#f2f2f2"]} />
      <fog attach="fog" args={["#f2f2f2", 1, 180]} />
      <ambientLight />
      <spotLight
        castShadow
        intensity={8}
        angle={Math.PI / 10}
        position={[10, 10, 10]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <mesh
        position={new Vector3(0.5, -13, -80)}
        rotation={new Euler(0, -Math.PI + 0.04, Math.PI + 0.04)}
        scale={modelScale}
        material={gltf.materials["Material.001"]}
      >
        <primitive object={gltf.scene} />
      </mesh>
      <CameraRig />
    </>
  );
};

const Canvas: React.FC = () => {
  const canvasProps = {
    camera: { fov: 75, position: new Vector3(0, 0, getPositionFromScroll()) },
  };

  return (
    <div className="canvas-container">
      <ThreeCanvas {...canvasProps} shadows dpr={[1, 2]}>
        <Suspense fallback={<></>}>
          <CanvasContent />
        </Suspense>
      </ThreeCanvas>
    </div>
  );
};

export default Canvas;
