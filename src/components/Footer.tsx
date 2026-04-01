import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      
      {/* Top Border */}
      <div className="border-t border-gray-800 mb-10"></div>

      <div className="grid md:grid-cols-5 gap-10">

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

        {/* Quick Links */}
       
        
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ByteLoft Pvt. Ltd. All rights reserved.
      </div>

    </footer>
  );
}