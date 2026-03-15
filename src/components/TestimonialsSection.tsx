import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Working with Teamollo was an absolute pleasure. They transformed our brand identity into something truly remarkable and memorable.",
    author: "Sarah Johnson",
    role: "CEO, TechVentures",
  },
  {
    text: "The attention to detail and creative thinking that Teamollo brings to every project is unmatched. Highly recommended for any design work.",
    author: "Michael Chen",
    role: "Founder, StartupLab",
  },
  {
    text: "Teamollo delivered beyond our expectations. Their strategic approach to design helped us increase conversions by 40%.",
    author: "Emily Rodriguez",
    role: "CMO, GrowthCo",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-section-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl">
          What our Clients are
          <br />
          saying about us!
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-green-accent fill-green-accent" />
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-6">
              "{testimonial.text}"
            </p>
            <div>
              <p className="font-display font-semibold text-foreground text-sm">{testimonial.author}</p>
              <p className="text-text-secondary text-xs">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
