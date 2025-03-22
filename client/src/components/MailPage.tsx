import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("https://formspree.io/f/mrbelpko", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="bg-gray-800/90 shadow-lg backdrop-blur-md p-8 rounded-2xl w-full max-w-md border border-gray-700">
        {/* <h2 className="text-3xl font-bold text-center text-purple-400 mb-6">Get in Touch</h2> */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            value={formData.name}
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            value={formData.email}
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            onChange={handleChange}
            value={formData.message}
            className="w-full p-3 bg-gray-700 text-white rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
          ></textarea>
          <button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 transition p-3 rounded-lg text-white font-bold">
            Send Message
          </button>
          <p className="text-center text-gray-400">{status}</p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
