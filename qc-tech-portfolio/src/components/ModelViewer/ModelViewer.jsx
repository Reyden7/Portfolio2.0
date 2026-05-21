import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
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

function FBXModel({ url, scale, position, rotation }) {
  const model = useFBX(url);

  return (
    <Center>
      <primitive
        object={model}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </Center>
  );
}

function ModelViewer({
  modelUrl,
  scale = 0.015,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
}) {
  const controlsRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isShiftMode, setIsShiftMode] = useState(false);

  const setLeftButtonMode = (mode) => {
    if (!controlsRef.current) return;

    controlsRef.current.mouseButtons.LEFT = mode;
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setIsShiftMode(false);
    setLeftButtonMode(THREE.MOUSE.ROTATE);
  };

  const handlePointerDown = (event) => {
    if (event.shiftKey) {
      setIsShiftMode(true);
      setLeftButtonMode(THREE.MOUSE.PAN);
      return;
    }

    setIsShiftMode(false);
    setLeftButtonMode(THREE.MOUSE.ROTATE);
  };

  const handlePointerUp = () => {
    setIsShiftMode(false);
    setLeftButtonMode(THREE.MOUSE.ROTATE);
  };

  return (
    <div
      className={`model-viewer ${isHovered ? "model-viewer--active" : ""}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <Canvas camera={{ fov: 45 }}>
        <CameraSetup />

        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 5, 4]} intensity={2.2} />
        <directionalLight position={[-4, 2, -3]} intensity={0.7} />

        <Suspense fallback={null}>
          {modelUrl ? (
            <FBXModel
              url={modelUrl}
              scale={scale}
              position={position}
              rotation={rotation}
            />
          ) : null}

          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          enabled={isHovered}
          enableRotate
          enablePan
          enableZoom
          enableDamping
          dampingFactor={0.08}
          screenSpacePanning
          panSpeed={0.75}
          rotateSpeed={0.7}
          zoomSpeed={0.9}
          autoRotate={autoRotate && isHovered}
          autoRotateSpeed={0.55}
          minDistance={1.2}
          maxDistance={12}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN,
          }}
        />
      </Canvas>

      {!modelUrl && (
        <div className="model-viewer__empty">
          <span>3D</span>
          <p>Modèle bientôt disponible</p>
        </div>
      )}

      {modelUrl && (
        <div className="model-viewer__controls">
          <span>Clic gauche : rotation</span>
          <span>Shift + clic : déplacement</span>
          <span>Molette : zoom</span>
        </div>
      )}

      {isShiftMode && (
        <div className="model-viewer__mode">
          Déplacement caméra
        </div>
      )}
    </div>
  );
}

export default ModelViewer;