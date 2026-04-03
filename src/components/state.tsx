import { useEffect, useRef, useState } from "react";
import { Cpu, Users, Building2, Lightbulb } from "lucide-react";

const stats = [
  {
    icon: Cpu,
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: 30,
    suffix: "+",
    label: "Expert Team Members",
  },
  {
    icon: Building2,
    value: 5,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: Lightbulb,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading (matches your style) */}
      

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <StatCard key={i} {...item} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, suffix, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, value]);

  return (
    <div className="text-center group">
      
      {/* Icon with glow */}
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-xl  border border-gray-800 group-hover:border-[#2596be] transition">
          <Icon
            size={28}
            className="text-black group-hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      {/* Number */}
      <h3 className="text-3xl md:text-4xl font-bold text-black">
        {count}
        {suffix}
      </h3>

      {/* Label */}
      <p className="text-gray-400 text-sm mt-2">{label}</p>
    </div>
  );
}