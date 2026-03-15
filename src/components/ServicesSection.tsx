import { motion } from "framer-motion";

const services = [
  "Web Design",
  "Web Development",
  "App Design",
  "Branding Design",
  "3D Modeling",
  "Digital Marketing",
  "Animation",
  "Web App Design & Development",
  "UI/UX",
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-text-secondary text-sm uppercase tracking-widest mb-8 text-center">
          Services we offer
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <motion.span
              key={service}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="service-pill"
            >
              {service}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
