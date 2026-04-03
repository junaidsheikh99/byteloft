import { motion } from "framer-motion";
import { memo, useState, useRef, useEffect } from "react";

import web from "@/assets/web.png";
import digital from "@/assets/digital.png";
import construction from "@/assets/construction.jpg";
import appdev from "@/assets/appdev.jpeg";
import planning from "@/assets/planning.webp";

/* 🔥 TYPE */
type Project = {
  title: string;
  description: string;
  image: string;
  align: "left" | "right";
};

const projects: Project[] = [
  {
    title: "Web Development",
    description:
      "We build modern, responsive, and high-performance websites focused on great user experience.",
    image: web,
    align: "right",
  },
  {
    title: "Application Development",
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
    title: "Home Designing and Planning",
    description:
      "We create smart, aesthetic, and functional home designs tailored to your space and lifestyle.",
    image: planning,
    align: "right",
  },
];

/* 🔥 MAGNETIC BUTTON */
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current!.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="mt-6 px-5 py-2.5 text-sm rounded-full border border-[#2596be]/40 text-[#2596be] hover:bg-[#2596be] hover:text-white transition duration-300 will-change-transform"
    >
      {children}
    </button>
  );
};

/* 🔥 Lazy Image */
const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[200px] md:h-[360px] overflow-hidden rounded-2xl group"
    >
      {/* Blur placeholder */}
      <div
        className={`absolute inset-0 bg-gray-200 blur-xl scale-110 transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover rounded-2xl transition duration-500 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } group-hover:scale-110`}
        />
      )}
    </div>
  );
};

/* 🔥 Project Card */
const ProjectCard = memo(({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${
        project.align === "right"
          ? "md:flex-row"
          : "md:flex-row-reverse"
      } gap-6 md:gap-10 items-center`}
    >
      {/* IMAGE */}
      <div className="w-full md:w-[50%]">
        <LazyImage src={project.image} alt={project.title} />
      </div>

      {/* TEXT */}
      <div className="w-full md:w-2/5">
        <h3 className="font-bold text-foreground text-2xl md:text-3xl mb-3">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed">
          {project.description}
        </p>

        {/* 🔥 Magnetic Button */}
        <MagneticButton>Learn More →</MagneticButton>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

/* 🔥 Main Section */
const PortfolioSection = () => {
  return (
    <section id="work" className="section-padding bg-background">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="font-bold text-foreground text-3xl md:text-4xl mb-12 text-center"
      >
        Selected work
      </motion.h2>

      {/* Projects */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;