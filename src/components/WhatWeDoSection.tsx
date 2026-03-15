import { motion } from "framer-motion";
import { Play } from "lucide-react";

const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h2 className="font-display font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-tight">
              Take a Look
              <br />
              at What
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-green-accent flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shrink-0"
          >
            <Play size={28} className="text-foreground ml-1" fill="currentColor" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h2 className="font-display font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-tight md:text-right">
              We Can Do
              <br />
              For You
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
