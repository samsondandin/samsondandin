import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ShardProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
}

const IceShard = ({ position, rotation, scale, speed }: ShardProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.002 * speed;
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.3 * speed) * 0.5;
    }
  });

  const geometry = useMemo(() => {
    // Create an elongated octahedron-like crystal shape
    const geo = new THREE.OctahedronGeometry(1, 0);
    geo.scale(0.3, 1, 0.3);
    return geo;
  }, []);

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      rotation={rotation} 
      scale={scale}
      geometry={geometry}
    >
      <meshStandardMaterial
        color="#4dd0e1"
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.9}
        emissive="#4dd0e1"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const MouseRepulsion = ({ children }: { children: React.ReactNode }) => {
  const { mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child) => {
        const mesh = child as THREE.Mesh;
        const mouseX = mouse.x * 5;
        const mouseY = mouse.y * 5;
        
        const dx = mesh.position.x - mouseX;
        const dy = mesh.position.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 3) {
          const force = (3 - distance) * 0.02;
          mesh.position.x += dx * force * 0.1;
          mesh.position.y += dy * force * 0.1;
        }
        
        // Slowly return to original position
        mesh.position.x *= 0.995;
        mesh.position.y *= 0.995;
      });
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const Scene = () => {
  const shards = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.5,
      speed: 0.5 + Math.random() * 0.5
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#4dd0e1" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#7c3aed" />
      
      <MouseRepulsion>
        {shards.map((shard, i) => (
          <IceShard key={i} {...shard} />
        ))}
      </MouseRepulsion>
    </>
  );
};

const IceShardBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default IceShardBackground;
