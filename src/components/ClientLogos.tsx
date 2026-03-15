import { motion } from "framer-motion";

const clients = ["CAMBRIAN", "CLOCKWORK", "Crompton", "SECLOCK", "Software", "Outta"];

const ClientLogos = () => {
  return (
    <section className="py-14 px-6 md:px-12 lg:px-20 bg-background border-y border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
      >
        {clients.map((client) => (
          <span
            key={client}
            className="text-foreground/30 font-display font-bold text-lg md:text-xl tracking-wider hover:text-foreground/60 transition-colors cursor-default"
          >
            {client}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default ClientLogos;
