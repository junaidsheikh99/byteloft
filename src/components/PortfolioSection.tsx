import { motion } from "framer-motion";
import portfolioBranding from "@/assets/portfolio-branding.jpg";
import portfolioApp from "@/assets/portfolio-app.jpg";
import portfolioIdentity from "@/assets/portfolio-identity.jpg";
import portfolioPackaging from "@/assets/portfolio-packaging.jpg";
import portfolioWebsite from "@/assets/portfolio-website.jpg";

const projects = [
  {
    title: "Branding Design",
    description: "Premium brand identity and collateral design for luxury brands.",
    image: portfolioBranding,
    align: "right" as const,
  },
  {
    title: "Application Design",
    description: "Intuitive fintech mobile app with data visualization dashboard.",
    image: portfolioApp,
    align: "left" as const,
  },
  {
    title: "Branding Identity",
    description: "Complete brand identity system including merchandise and packaging.",
    image: portfolioIdentity,
    align: "right" as const,
  },
  {
    title: "Packaging Design",
    description: "Elegant minimalist packaging for premium cosmetic products.",
    image: portfolioPackaging,
    align: "left" as const,
  },
  {
    title: "Website Design",
    description: "Responsive creative agency website with modern UI patterns.",
    image: portfolioWebsite,
    align: "right" as const,
  },
];

const PortfolioSection = () => {
  return (
    <section id="work" className="section-padding bg-background">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display font-bold text-foreground text-3xl md:text-4xl mb-16 text-center"
      >
        Selected work
      </motion.h2>

      <div className="space-y-24 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`flex flex-col ${
              project.align === "right" ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 md:gap-12 items-center`}
          >
            <div className="w-full md:w-3/5 portfolio-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[280px] md:h-[360px] object-cover rounded-2xl"
              />
            </div>
            <div className="w-full md:w-2/5">
              <h3 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-3">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 w-8 h-8 rounded-full bg-green-accent flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
