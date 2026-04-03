import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Working with Byteloft was an absolute pleasure. They transformed our brand identity into something truly remarkable and memorable.",
    author: "Datta Darve",
    role: "Founder, Shivkanta Logistics",
  },
  {
    text: "The attention to detail and creative thinking that Byteloft brings to every project is unmatched. Highly recommended for any design work.",
    author: "Saurabh Jadhav",
    role: "Founder, S.j. studios",
  },
  {
    text: "Byteloft delivered beyond our expectations. Their strategic approach to design helped us increase conversions by 40%.",
    author: "Rohit Verma",
    role: "Director, NextGen Software",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,150,190,0.15),transparent_70%)]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-white">
          What our Clients are
          <br />
          saying about us
        </h2>
       
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 relative z-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-[#2596be33] to-transparent"
          >
            {/* inner card */}
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/5 group-hover:border-[#2596be]/40 transition">
              
              {/* ⭐ Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-[#ffc107] fill-[#ffc107] drop-shadow-[0_0_6px_#ffc107]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{testimonial.text}”
              </p>

              {/* Author */}
              <div className="mt-auto">
                <p className="text-white font-semibold text-sm">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-xs">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;