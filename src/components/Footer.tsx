import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      
      {/* Top Border */}
      <div className="border-t border-gray-800 mb-10"></div>

      <div className="grid md:grid-cols-4 gap-10">

        {/* Reach Us */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Reach us</h3>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <Phone size={16} />
              <span>+91 7887424274</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} />
              <span>byteloftpl@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} />
              <span>
                Sati Chowk, Warud <br />
                Maharashtra, India
              </span>
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Company</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Legal</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Services</li>
            <li className="hover:text-white cursor-pointer">Terms of Use</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Our Location</h3>

          <a
            href="https://maps.google.com/?q=21.471739897554205,78.26803048147309"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition duration-300">
              
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

          <p className="text-xs text-gray-400 mt-2">
            Click map to open in Google Maps
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ByteLoft Pvt. Ltd. All rights reserved.
      </div>

    </footer>
  );
}