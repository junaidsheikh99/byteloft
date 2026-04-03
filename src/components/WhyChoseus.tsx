import { motion } from "framer-motion";
import { Shield, Zap, Target, Globe } from "lucide-react";

const features = [
  {
    title: "Experienced Team",
    description:
      "Our multidisciplinary team brings decades of combined expertise across software, construction, and energy sectors.",
    icon: Shield,
  },
  {
    title: "Innovative Technology",
    description:
      "We leverage the latest tools, frameworks, and methodologies to deliver future-ready solutions that scale.",
    icon: Zap,
  },
  {
    title: "Reliable Execution",
    description:
      "On-time delivery, transparent communication, and rigorous quality control define every project we undertake.",
    icon: Target,
  },
  {
    title: "End-to-End Solutions",
    description:
      "From ideation to deployment and maintenance — we manage the entire lifecycle so you can focus on growth.",
    icon: Globe,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
            Why ByteLoft
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-black">
            Why Choose Us
          </h2>

          <div className="mt-5 w-16 h-[2px] bg-black mx-auto rounded-full opacity-70" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200 rounded-xl p-8 transition hover:shadow-md"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-black mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-black mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}