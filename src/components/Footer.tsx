import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 md:px-16 py-16 overflow-hidden rounded-t-[80px]">
      
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2596be]/30 blur-[120px] opacity-80"></div>
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#2596be]/20 blur-[100px] opacity-70"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#2596be]/20 blur-[100px] opacity-70"></div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mb-12 relative z-10"></div>

      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-12 relative z-10">

        {/* Reach Us */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Reach us</h3>

          <div className="space-y-5 text-sm text-gray-400">
            <div className="flex items-center gap-3 group">
              <Phone size={16} className="text-[#2596be] group-hover:scale-110 transition" />
              <span className="group-hover:text-white transition">
                +91 7887424274
              </span>
            </div>

            <div className="flex items-center gap-3 group">
              <Mail size={16} className="text-[#2596be] group-hover:scale-110 transition" />
              <span className="group-hover:text-white transition">
                byteloftpl@gmail.com
              </span>
            </div>

            <div className="flex items-start gap-3 group">
              <MapPin size={16} className="text-[#2596be] mt-1 group-hover:scale-110 transition" />
              <span className="group-hover:text-white transition">
                Sati Chowk, Warud <br />
                Maharashtra, India
              </span>
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Company</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            {["About", "Contact", "Blogs"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-white transition relative group w-fit"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#2596be] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Legal</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            {[
              "Privacy Policy",
              "Terms & Services",
              "Terms of Use",
              "Refund Policy",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-white transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Map (NO HOVER EFFECT) */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Our Location</h3>

          <a
            href="https://maps.google.com/?q=21.471739897554205,78.26803048147309"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10">
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d928.2294616185314!2d78.26803048147309!3d21.471739897554205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssati%20chowk%20warud!5e0!3m2!1sen!2sin!4v1775075260737!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="pointer-events-none"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
          </a>

          <p className="text-xs text-gray-500 mt-3">
            Click map to open in Google Maps
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-500 relative z-10">
        © {new Date().getFullYear()} ByteLoft Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}