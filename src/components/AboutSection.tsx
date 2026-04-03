import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text = `ByteLoft Private Limited is a technology-driven company focused on delivering innovative IT solutions along with reliable civil and electrical project execution. The company was founded with the vision of combining digital technology with real-world infrastructure to create practical, scalable, and efficient solutions for businesses and organizations.`;

const AboutSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // select ONLY letters (nested spans)
      const letters = textRef.current.querySelectorAll("span span");

      gsap.fromTo(
        letters,
        { color: "rgba(0,0,0,0.2)" },
        {
          color: "#111",
          stagger: 0.015,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 0.5,
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      
      <h1 className="text-center pb-4 text-text-secondary text-xs sm:text-sm uppercase tracking-widest">
        ABOUT US
      </h1>

      <div className="max-w-4xl mx-auto text-center">
        <p
          ref={textRef}
          className="text-base sm:text-lg leading-relaxed flex flex-wrap justify-between md:justify-center break-words"
        >
          {text.split(" ").map((word, index) => (
            <span key={index} className="inline-block mr-1">
              {word.split("").map((letter, i) => (
                <span key={i} className="inline-block">
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>

    </section>
  );
};

export default AboutSection;