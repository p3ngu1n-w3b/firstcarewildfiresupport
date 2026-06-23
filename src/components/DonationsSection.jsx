import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import {
  bankDetails,
  contact,
  donationTiers,
} from "../data/siteContent";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp } from "../utils/motion";

const DonationsSection = () => {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="donations" className="py-20 bg-gradient-to-b from-white via-red-50/50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Support our volunteers"
          title="Fire Season Is Here"
          subtitle="Help us make a difference. As a volunteer organisation we rely on donations and sponsorships to continue assisting communities across the Western Cape."
        />

        <motion.div
          className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 border border-brand/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className="text-center p-4 rounded-xl bg-brand/5 border border-brand/10"
              >
                <p className="text-2xl font-bold text-brand">{tier.amount}</p>
                <p className="text-sm text-gray-600 mt-1">{tier.impact}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-brand rounded-full" />
                Bank Details
              </h3>
              <dl className="space-y-2 text-gray-800">
                <div>
                  <dt className="font-medium text-sm text-gray-500">
                    Account type
                  </dt>
                  <dd>{bankDetails.accountType}</dd>
                </div>
                <div>
                  <dt className="font-medium text-sm text-gray-500">
                    Account name
                  </dt>
                  <dd>{bankDetails.accountName}</dd>
                </div>
                <div>
                  <dt className="font-medium text-sm text-gray-500">
                    Account number
                  </dt>
                  <dd className="flex items-center gap-2">
                    <span className="font-mono text-lg font-bold">
                      {bankDetails.accountNumber}
                    </span>
                    <button
                      onClick={copyAccountNumber}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      aria-label="Copy account number"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-sm text-gray-500">
                    Reference
                  </dt>
                  <dd className="font-bold text-brand">
                    {bankDetails.reference}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-brand text-white rounded-xl p-6 text-center mb-6">
                <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
                  Every donation helps
                </p>
                <p className="text-2xl font-bold mt-1">No amount is too small</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sponsorships & Enquiries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For sponsorships please contact {contact.sponsorshipContact.name}{" "}
                on{" "}
                <a
                  href={`tel:${contact.sponsorshipContact.phone}`}
                  className="font-semibold text-brand hover:underline"
                >
                  {contact.sponsorshipContact.phoneDisplay}
                </a>{" "}
                or email{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold text-brand hover:underline"
                >
                  {contact.email}
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationsSection;
