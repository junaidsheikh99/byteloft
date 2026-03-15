import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-body">
          We are an award-winning strategic design company that
          provides consultancy services across all areas. Our team consists
          of a super blend of thinkers, strategists, designers,
          researchers, developers and doers. Not too big, not
          too small, just awesome and completely independent.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
