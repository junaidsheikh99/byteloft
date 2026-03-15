import { motion } from "framer-motion";
import heroImage from "@/assets/hero-office.jpg";

const HeroSection = () => {
  return (
    <section className="bg-[#2596be] min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <h1 className="font-display font-extrabold text-hero-foreground text-5xl sm:text-6xl md:text-7xl lg:text-7xl leading-[0.95] tracking-tight">
          Building <span className="text-[#0f172a]">Technology</span> &
          <br />
          <span className="">Infrastructure</span> for the
          <br />
          <span className="text-hero-foreground text-[#0f172a]">Future</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 relative"
      >
        <div className="rounded-2xl overflow-hidden max-w-4xl relative">
          <img
            src={heroImage}
            alt="Teamollo creative workspace"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          {/* Green floating button */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 bg-green-accent rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
