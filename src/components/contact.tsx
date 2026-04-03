import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      alert("Email and message are required!");
      return;
    }

    setLoading(true);

    // 🔥 1. SEND EMAIL TO YOU (ADMIN)
    emailjs
      .send(
        "service_q7phwzb",
        "template_geovt9p", // 👈 replace with your admin template ID
        {
          to_email: "byteloftpl@gmail.com",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || "General Inquiry",
          message: formData.message,
        },
        "Bfn6iNbAtTjlKaT3j"
      )
      .then(() => {
        // 🔥 2. SEND AUTO REPLY TO USER
        return emailjs.send(
          "service_q7phwzb",
          "template_6skk4g8", // 👈 replace with your user template ID
          {
            firstName: formData.firstName,
            email: formData.email,
            subject: formData.subject || "General Inquiry",
          },
          "Bfn6iNbAtTjlKaT3j"
        );
      })
      .then(() => {
        setSuccess("Message sent successfully 🚀");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("ERROR:", error);
        alert("Failed to send message");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="py-20 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-2">
        
        {/* LEFT */}
        <div className="bg-black text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Contact Information
            </h2>
            <p className="text-gray-400 mb-8">
              Say something to start a chat!
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} /> +91 7887424274
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} /> byteloftpl@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} /> Warud, Maharashtra
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-10">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div className="grid grid-cols-2 gap-6">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border-b border-gray-300 py-2 outline-none"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border-b border-gray-300 py-2 outline-none"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-6">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border-b border-gray-300 py-2 outline-none"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border-b border-gray-300 py-2 outline-none"
              />
            </div>

            {/* Subject */}
            <div className="flex gap-4 flex-wrap text-sm">
              {["General Inquiry", "Support", "Project", "Other"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value={item}
                    checked={formData.subject === item}
                    onChange={handleChange}
                  />
                  {item}
                </label>
              ))}
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border-b border-gray-300 py-2 outline-none"
              rows={4}
            />

            {/* Success Message */}
            {success && (
              <p className="text-green-600 text-sm">{success}</p>
            )}

            {/* Button */}
            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-[#2596be] transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}