import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useFBX, Center, Environment } from "@react-three/drei";
import "./ModelViewer.css";

function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(2.8, 2.2, 3.4);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
}

function FBXModel({ url }) {
  const model = useFBX(url);

  return (
    <Center>
      <primitive object={model} scale={0.015} />
    </Center>
  );
}

function ModelViewer({ modelUrl }) {
  return (
    <div className="model-viewer">
      <Canvas camera={{ fov: 45 }}>
        <CameraSetup />

        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 5, 4]} intensity={2.2} />
        <directionalLight position={[-4, 2, -3]} intensity={0.7} />

        <Suspense fallback={null}>
          {modelUrl ? <FBXModel url={modelUrl} /> : null}
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>

      {!modelUrl && (
        <div className="model-viewer__empty">
          <span>3D</span>
          <p>Modèle bientôt disponible</p>
        </div>
      )}
    </div>
  );
}

export default ModelViewer;