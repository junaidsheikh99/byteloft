import { motion } from "framer-motion";
import heroImage from "@/assets/hero-office.jpg";

const text = "Building Technology & Infrastructure for the Future";

const HeroSection = () => {
  return (
    <section
      className="
        relative overflow-hidden
        min-h-screen flex flex-col justify-center
        bg-[#2596be]
        pt-16 lg:pt-24 pb-16 px-6 md:px-12 lg:px-20
        rounded-b-[60px] md:rounded-b-[100px] lg:rounded-b-[140px]
      "
    >
      {/* TEXT */}
      <div className="max-w-5xl relative z-10">
        <h1 className="font-bold text-white text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight flex flex-wrap">
          
          {text.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`mr-3 ${
                word === "Technology" || word === "Future"
                  ? "text-[#0f172a]"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="mt-12 relative z-10"
      >
        <div className="rounded-2xl overflow-hidden w-full relative">
          
          <motion.img
            src={heroImage}
            alt="Creative workspace"
            loading="eager"
            decoding="async"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="w-full h-[300px] md:h-[420px] object-cover"
          />

          {/* subtle overlay (keep this for readability) */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;