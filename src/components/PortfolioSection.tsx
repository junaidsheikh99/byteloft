import { motion } from "framer-motion";
import web from "@/assets/web.png";
import digital from "@/assets/digital.png";
import construction from "@/assets/construction.jpg";
import appdev from "@/assets/appdev.jpeg";
import planning from "@/assets/planning.png";

const projects = [
  {
    title: "Web Development",
    description:
      "We build modern, responsive, and high-performance websites focused on great user experience.",
    image: web,
    align: "right",
  },
  {
    title: "Application Devlopment",
    description:
      "We develop user-friendly and scalable mobile and web applications tailored to your business needs.",
    image: appdev,
    align: "left",
  },
  {
    title: "Building Construction",
    description:
      "We provide reliable and durable construction services using quality materials and modern techniques.",
    image: construction,
    align: "right",
  },
  {
    title: "Digital Marketing",
    description:
      "We help grow your online presence through effective SEO, social media, and advertising strategies.",
    image: digital,
    align: "left",
  },
  {
    title: "Home Designing and planning",
    description:
      "We create smart, aesthetic, and functional home designs tailored to your space and lifestyle.",
    image: planning,
    align: "right",
  },
];

const PortfolioSection = () => {
  return (
    <section id="work" className="section-padding bg-background">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bold text-foreground text-3xl md:text-4xl mb-16 text-center"
      >
        Selected work
      </motion.h2>

      {/* Projects */}
      <div className="space-y-24 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`flex flex-col ${
              project.align === "right"
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } gap-8 md:gap-12 items-center`}
          >
            {/* IMAGE */}
            <div className="w-full md:w-3/5 portfolio-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] md:h-[360px] object-cover rounded-2xl"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-2/5">
              <h3 className="font-bold text-foreground text-2xl md:text-3xl mb-3">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed">
                {project.description}
              </p>

              {/* 🔥 Updated Arrow Button */}
              <div className="mt-4 w-8 h-8 rounded-full bg-[#2596be] flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-[#1e7ea1] transition-all duration-300">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default PortfolioSection;