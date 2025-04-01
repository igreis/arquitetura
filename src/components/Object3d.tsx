import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const Demo3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="w-full h-[800px] border border-gray-200 rounded-md overflow-hidden"
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </Canvas>
    </motion.div>
  );
};

export default Demo3D;
