import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text = `ByteLoft Private Limited is a technology-driven company focused on delivering innovative IT solutions along with reliable civil and electrical project execution. The company was founded with the vision of combining digital technology with real-world infrastructure to create practical, scalable, and efficient solutions for businesses and organizations.`;

const AboutSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = textRef.current.querySelectorAll("span");

      gsap.fromTo(
        letters,
        { color: "rgba(0,0,0,0.2)" },
        {
          color: "#111",
          stagger: 0.02, // 🔥 faster reveal
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",   // start when enters screen
            end: "top 35%",     // finish early (~70% viewport)
            scrub: 0.5          // smooth premium feel
          }
        }
      );
    }, textRef);

    return () => ctx.revert(); // 🔥 cleanup (important)
  }, []);

  return (
    <section id="about" className="py-28 px-6">
      
      <h1 className="text-center pb-4 text-text-secondary text-sm uppercase tracking-widest">
        ABOUT US
      </h1>

      <div className="max-w-4xl mx-auto text-center">
        <p
          ref={textRef}
          className="text-lg md:text-lg leading-relaxed flex flex-wrap justify-center"
        >
          {text.split("").map((letter, index) => (
            <span key={index} className="whitespace-pre">
              {letter}
            </span>
          ))}
        </p>
      </div>

    </section>
  );
};

export default AboutSection;