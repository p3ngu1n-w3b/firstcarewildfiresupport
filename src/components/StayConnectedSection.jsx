import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { social, whatsappChannelUrl, contact } from "../data/siteContent";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";
import { fadeUp, staggerContainer } from "../utils/motion";

const StayConnectedSection = () => {
  const hasChannel = Boolean(whatsappChannelUrl);

  return (
    <section className="py-20 section-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Stay Connected"
          subtitle="Follow us for fire season updates, training announcements, and community stories."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-2xl p-8 shadow-lg border border-[#25d366]/20 md:col-span-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25d366]/10 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25d366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              WhatsApp Channel
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Get fire season updates and training announcements straight to your
              phone. Join our channel — no spam, just what matters.
            </p>

            {hasChannel ? (
              <a
                href={whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" className="w-full">
                  Join Our Channel
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  Channel link coming soon. In the meantime, message us directly
                  on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" className="w-full">
                    Message Us on WhatsApp
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            )}
          </motion.div>

          <motion.a
            variants={fadeUp}
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
              Facebook
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Follow our latest photos, fire response updates, and community
              stories.
            </p>
            <span className="inline-flex items-center gap-1 text-brand font-semibold text-sm mt-4">
              Visit Page <ExternalLink className="w-3 h-3" />
            </span>
          </motion.a>

          <motion.a
            variants={fadeUp}
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="50%" stopColor="#e6683c" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#ig)"
                  d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
              Instagram
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              See our team in action — training sessions, deployments, and behind
              the scenes.
            </p>
            <span className="inline-flex items-center gap-1 text-brand font-semibold text-sm mt-4">
              Follow Us <ExternalLink className="w-3 h-3" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StayConnectedSection;
