import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display font-extrabold text-foreground text-4xl md:text-6xl lg:text-7xl leading-tight ">
          Want to Start
          <br />
          a Project?
        </h2>
        
      </motion.div>
    </section>
  );
};

export default CTASection;
