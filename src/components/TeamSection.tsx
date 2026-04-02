import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import founder1 from "@/assets/founder1.jpeg";
import founder2 from "@/assets/founder2.jpeg";
gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "S I Patel",
    role: "Co-Founder & Director",
    desc: `3+ year of experience in the IT sector, specializing in digital marketing.`,
    image: founder1,
    align: "left",
  },
  {
    name: "Junaid Sheikh",
    role: "Co-Founder & CEO",
    desc: `3+ year of experience in the it sector, specializing in data management solutions`,
    image: founder2,
    align: "right",
  },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".team-item");

      items.forEach((item) => {
        const image = item.querySelector(".team-image");
        const text = item.querySelector(".team-text");

        // 🔥 Fade + slide
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

        // 🔥 Parallax image
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

        // 🔥 Text reveal
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
    <section ref={sectionRef} className="bg-white py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-10">

        {team.map((member, i) => (
          <div
            key={i}
            className={`team-item flex flex-col ${
              member.align === "left"
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } items-center gap-12`}
          >
            {/* IMAGE */}
            <div className="team-image relative w-full md:w-1/2 group">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-[400px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="team-text w-full md:w-1/2">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                {member.role}
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {member.name}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {member.desc}
              </p>

              {/* Divider + Icons */}
              <div className="flex items-center gap-4">
                <div className="flex gap-3 text-gray-500 text-sm">
                  <span>🔗</span>
                  <span>📄</span>
                  <span>⭐</span>
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