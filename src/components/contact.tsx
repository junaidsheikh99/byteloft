import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="bg-black text-white p-10 flex flex-col justify-between relative">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Contact Information
            </h2>
            <p className="text-gray-400 mb-8">
              Say something to start a live chat!
            </p>

            <div className="space-y-6 text-sm">
              <div className="flex items-center gap-4">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={18} />
                <span>byteloftpl@gmail.com</span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} />
                <span>
                  Sati Chowk, Warud <br />
                  Maharashtra, India
                </span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-10">
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:bg-[#2596be] transition">
              T
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:bg-[#2596be] transition">
              I
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:bg-[#2596be] transition">
              D
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10">
          <form className="space-y-6">

            {/* Name */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-500">First Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Last Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Phone Number</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm text-gray-600 block mb-3">
                Select Subject?
              </label>

              <div className="flex flex-wrap gap-6 text-sm">
                {["General Inquiry", "Support", "Project", "Other"].map(
                  (item, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="subject" className="accent-black" />
                      {item}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-500">Message</label>
              <textarea
                rows="3"
                placeholder="Write your message.."
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#2596be] transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}