import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Instagram, Twitter } from "lucide-react";

import founder1 from "@/assets/founder1.jpeg";
import founder2 from "@/assets/founder2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Vicky Patel",
    role: "Co-Founder & Director",
    desc: `A results-driven professional with over 3+ years of experience in the IT sector, bringing a strong blend of technical expertise and strategic thinking. Previously served as a Digital Marketing Manager, with proven capabilities in driving online growth, brand positioning, and performance-oriented campaigns.
Holding a background in Civil Engineering, he possesses in-depth knowledge of building construction, design, and planning. His multidisciplinary expertise enables him to bridge the gap between technology, marketing, and infrastructure, contributing to innovative and practical business solutions.`,
    image: founder1,
    align: "left",
  },
  {
    name: "Junaid Sheikh",
    role: "Co-Founder & CEO",
    desc: `A highly skilled technology professional with over 3+ years of experience in the IT sector, specializing in project execution and digital transformation initiatives. He has previously served as a Project Manager for government digitization projects, successfully leading and delivering large-scale document digitization and process optimization assignments.
He holds a Master’s degree in Computer Engineering and possesses strong expertise in software development and Artificial Intelligence. With a deep understanding of both technical architecture and project management, he plays a key role in driving innovation, ensuring efficient execution, and delivering scalable technology solutions.`,
    image: founder2,
    align: "right",
  },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".team-item");

      // 🔥 Heading animation
      gsap.fromTo(
        ".team-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-heading",
            start: "top 85%",
          },
        }
      );

      items.forEach((item) => {
        const image = item.querySelector(".team-image");
        const text = item.querySelector(".team-text");

        gsap.fromTo(
          item,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        );

        if (image) {
          gsap.fromTo(
            image,
            { y: 50 },
            {
              y: -50,
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        if (text) {
          gsap.fromTo(
            text,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.2,
              scrollTrigger: {
                trigger: item,
                start: "top 75%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 px-6 md:px-12 lg:px-20">
      
      {/* 🔥 HEADING */}
      <div className="team-heading max-w-3xl mx-auto text-center mb-24">
        

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Leadership Team
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Meet the minds behind ByteLoft combining technology, strategy, and
          innovation to build impactful solutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">

        {team.map((member, i) => (
          <div
            key={i}
            className={`team-item flex flex-col ${
              member.align === "left"
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } md:items-center gap-0 md:gap-12`}
          >
            {/* IMAGE */}
            <div className="team-image relative w-full md:w-1/2 group">
              <div className="overflow-hidden rounded-2xl flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className=" h-[300px] md:h-[400] w-[200px] rounded-2xl   object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="team-text w-full md:w-1/2 mt-6 md:mt-0">
              <p className="text-sm uppercase  tracking-widest text-gray-800 mb-2">
                {member.role}
              </p>

              <h2 className="text-3xl  md:text-4xl font-bold text-gray-900 mb-4">
                {member.name}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                {member.desc}
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-5">
                <div className="flex gap-4 text-gray-500">

                  <a href="#" className="hover:text-blue-600 transition">
                    <Linkedin size={18} />
                  </a>

                  <a href="#" className="hover:text-pink-500 transition">
                    <Instagram size={18} />
                  </a>

                  <a href="#" className="hover:text-sky-500 transition">
                    <Twitter size={18} />
                  </a>

                </div>

                <div className="flex-1 h-[1px] bg-gray-300" />
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TeamSection;