"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Sparkles, CheckCircle2, Shield, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "Private Tasting Degustation",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [refCode, setRefCode] = useState("");

  const enquiryOptions = [
    "Private Tasting Degustation",
    "Bespoke Private Curation",
    "Collector's Vault Allocation",
    "Corporate & Diplomatic Gifting",
    "Press & Editorial Enquiries",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please state your name or title.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please provide a valid private contact email.");
      return;
    }

    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please share brief details of your request or date of interest.");
      return;
    }

    setStatus("submitting");

    // Simulate luxury concierge receipt
    setTimeout(() => {
      const randomCode = "OC-" + Math.floor(100000 + Math.random() * 900000);
      setRefCode(randomCode);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        enquiryType: "Private Tasting Degustation",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="bg-obsidian min-h-screen pt-28 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6 md:px-12">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-1/4 h-[550px] w-[550px] rounded-full bg-gold/5 blur-[170px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Concierge Info & Etiquette */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="PRIVATE CONCIERGE"
              title="A DIALOGUE IN SHADOW."
              subtitle="Whether reserving a private atelier degustation, inquiring about seasonal vintage allocations, or commissioning a bespoke private curation, our concierge is at your service."
              align="left"
              className="mb-6 sm:mb-8"
            />

            {/* Atelier Protocols */}
            <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6 border-t border-white/10 text-xs font-sans text-ash">
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 bg-charcoal/20 border border-gold/15 rounded">
                <MapPin className="h-4 w-4 text-gold flex-none mt-0.5" />
                <div>
                  <span className="font-serif text-sm text-ivory block">
                    The Geneva Atelier
                  </span>
                  <p className="mt-1 text-ash">
                    Rue du Rhône, 1204 Genève, Switzerland
                  </p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-ritual text-champagne/80 mt-1">
                    Concept Atelier Studio • By Private Appointment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 bg-charcoal/20 border border-gold/15 rounded">
                <Mail className="h-4 w-4 text-gold flex-none mt-0.5" />
                <div>
                  <span className="font-serif text-sm text-ivory block">
                    Private Correspondence
                  </span>
                  <p className="mt-1 text-ash">
                    concierge@obsidiancacao.com
                  </p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-ritual text-champagne/80 mt-1">
                    Direct Sommelier &amp; Curation Desk
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 bg-charcoal/20 border border-gold/15 rounded">
                <Clock className="h-4 w-4 text-gold flex-none mt-0.5" />
                <div>
                  <span className="font-serif text-sm text-ivory block">
                    Concierge Hours
                  </span>
                  <p className="mt-1 text-ash">
                    Monday to Saturday • 10:00 — 19:00 CET
                  </p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-ritual text-champagne/80 mt-1">
                    Discrete response guaranteed within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-widest text-ash/60">
              <Shield className="h-3.5 w-3.5 text-gold/60 flex-none" />
              <span>All private communications are handled with strict confidentiality.</span>
            </div>
          </div>

          {/* Right Column: Private Enquiry Form */}
          <div className="lg:col-span-7 bg-charcoal/30 border border-gold/25 p-5 sm:p-8 md:p-12 rounded-sm shadow-luxury">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-espresso border border-gold mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-gold" />
                </div>
                <span className="font-sans text-[10px] uppercase tracking-ritual text-gold block">
                  Enquiry Registered
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory mt-2">
                  We Have Received Your Communication
                </h3>
                <p className="mt-4 font-sans text-sm text-ash max-w-md mx-auto leading-relaxed">
                  Your reference dossier is <span className="font-serif text-champagne font-semibold">{refCode}</span>.
                  Our private concierge will be in contact shortly with discreet options tailored to your preference.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 inline-block font-sans text-[10px] uppercase tracking-ritual text-gold border border-gold/40 px-6 py-2.5 rounded hover:bg-gold/10 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-[10px] uppercase tracking-ritual text-gold mb-2 font-medium"
                  >
                    Name or Title *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lord Sterling / Dr. Eleanor Vance"
                    className="w-full bg-obsidian border border-white/10 px-4 py-3.5 text-xs text-ivory placeholder-ash/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-[10px] uppercase tracking-ritual text-gold mb-2 font-medium"
                  >
                    Private Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="concierge@residence.com"
                    className="w-full bg-obsidian border border-white/10 px-4 py-3.5 text-xs text-ivory placeholder-ash/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiryType"
                    className="block font-sans text-[10px] uppercase tracking-ritual text-gold mb-2 font-medium"
                  >
                    Nature of Private Enquiry
                  </label>
                  <select
                    id="enquiryType"
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full bg-obsidian border border-white/10 px-4 py-3.5 text-xs text-ivory focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                  >
                    {enquiryOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-charcoal text-ivory">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-[10px] uppercase tracking-ritual text-gold mb-2 font-medium"
                  >
                    Details &amp; Preferred Dates *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify your preferred date, party size, or specific vintage editions of interest..."
                    className="w-full bg-obsidian border border-white/10 px-4 py-3.5 text-xs text-ivory placeholder-ash/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="font-sans text-xs text-red-400 bg-red-950/30 border border-red-900/50 p-3 rounded">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-espresso border border-gold/50 px-8 py-4 font-sans text-xs uppercase tracking-ritual text-ivory hover:border-gold hover:bg-cacao transition-all duration-300 disabled:opacity-50 shadow-gold-subtle"
                >
                  {status === "submitting" ? "Transmitting to Concierge..." : "Transmit Private Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
