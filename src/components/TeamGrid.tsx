import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter } from "lucide-react";

import founder1 from "@/assets/founder1.jpeg";
import founder2 from "@/assets/founder2.jpeg";

const teamMembers = [
  {
    name: "Vicky Patel",
    role: "Co-Founder & Director",
    image: founder1,
  },
  {
    name: "Junaid Sheikh",
    role: "Co-Founder & CEO",
    image: founder2,
  },
  {
    name: "Team Member",
    role: "Developer",
    image: founder1,
  },
  {
    name: "Team Member",
    role: "Designer",
    image: founder2,
  },
  {
    name: "Team Member",
    role: "Marketing",
    image: founder1,
  },
];

const TeamGrid = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        
        <span className="inline-block text-xs font-medium bg-[#2596be]/10 text-[#2596be] px-4 py-1 rounded-full mb-4">
          Our Team
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Meet our team members
        </h2>

        <p className="text-gray-600 text-sm md:text-base">
          We focus on delivering quality and innovation to help businesses grow
          and succeed in the digital world.
        </p>

      </div>

      {/* 🔥 GRID (FIXED) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* IMAGE */}
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-100"
            />

            {/* TEXT */}
            <h3 className="mt-4 font-semibold text-gray-900 text-sm">
              {member.name}
            </h3>

            <p className="text-[#2596be] text-xs mb-2">
              {member.role}
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center gap-3 text-gray-400 mt-2">
              <a href="#" className="hover:text-[#2596be] transition">
                <Linkedin size={14} />
              </a>
              <a href="#" className="hover:text-[#2596be] transition">
                <Instagram size={14} />
              </a>
              <a href="#" className="hover:text-[#2596be] transition">
                <Twitter size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default TeamGrid;