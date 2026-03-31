import { motion } from "framer-motion";

const text = "ByteLoft";

export default function Loader() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <div className="flex text-4xl md:text-6xl font-bold text-[#2596be]">
        
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
          >
            {char}
          </motion.span>
        ))}

        {/* Blinking Cursor */}
        <motion.span
          className="ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
          }}
        >
          |
        </motion.span>
      </div>
    </div>
  );
}