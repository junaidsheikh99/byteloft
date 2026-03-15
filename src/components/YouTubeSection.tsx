import { motion } from "framer-motion";

const YouTubeSection = () => {
  return (
    <section className="section-padding bg-hero text-hero-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6">
          I train thousands of Students
          <br />
          everyday in YouTube
        </h2>
        <a
          href="#"
          className="inline-block bg-green-accent text-foreground font-medium text-sm rounded-full px-8 py-3 hover:scale-105 transition-transform"
        >
          Subscribe
        </a>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mt-14">
          {["CAMBRIAN", "Olive", "alk@", "SECLOCK"].map((name) => (
            <span
              key={name}
              className="text-hero-foreground/30 font-display font-bold text-lg tracking-wider"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default YouTubeSection;
