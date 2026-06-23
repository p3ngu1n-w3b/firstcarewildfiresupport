import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { contact, social } from "../data/siteContent";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";
import { fadeUp } from "../utils/motion";

const ContactSection = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "Events",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_s6403fa";
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_iahuddc";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "zWJ63oO2n7wbagWxP";

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setSubmitStatus({
        success: true,
        message: "Thank you! We will contact you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "Events",
      });
    } catch (err) {
      console.error("Error sending email:", err);
      setSubmitStatus({
        success: false,
        message:
          "There was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contact Us"
          subtitle="Available 24/7 for emergencies, consultations, and training enquiries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="bg-brand-dark text-white rounded-2xl p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  {contact.phones.map((phone) => (
                    <p key={phone.tel}>
                      <a href={`tel:${phone.tel}`} className="hover:underline">
                        {phone.display}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p>{contact.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-2">Social Media</p>
                  <div className="flex gap-4">
                    <a
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-hover transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-hover transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden h-48">
              <iframe
                title="Firstcare Wildfire Support location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106583.5!2d22.4!3d-33.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e74f2f7c8b8b8b9%3A0x0!2sGeorge%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            className="bg-surface rounded-2xl p-8 shadow-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            {mounted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="contact-input"
                  >
                    <option value="Events">Events</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Control Burns">Control Burns</option>
                    <option value="Training">Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      submitStatus.success
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            ) : (
              <p className="text-gray-500 text-center py-8">Loading form...</p>
            )}
          </motion.div>
        </div>
      </div>

      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-6 z-40 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1ebe57] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
};

export default ContactSection;
