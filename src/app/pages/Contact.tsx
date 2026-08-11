import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "advisory",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setStatus("submitting");

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxFnvVlx-XsK2D00tSQYA8IWZIwSbdJdbll6UvoouVSn_Y1e--M1DYTQAxbw2qLGEOQCg/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      );

      const text = await response.text();

      console.log(text);

      const data = JSON.parse(text);

      if (data.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          organization: "",
          interest: "advisory",
          message: "",
        });
      } else {
        console.log(data.error);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  };

  /*
   * Professional Black + Orange Theme
   *
   * Background: #0D0D0D
   * Cards:      #151515
   * Accent:     Tailwind orange-500
   * Text:       White
   * Borders:    Subtle dark warm tone
   */

  const inputBase =
    "w-full px-3 py-3 text-sm sm:text-base bg-[#0D0D0D] border border-[#3A301F] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300";

  return (
    <div className="pt-20 bg-[#0D0D0D] text-white min-h-screen">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-[#0D0D0D] border-t border-[#3A301F]">
        <div className="container mx-auto px-4 sm:px-6">

          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white">
              Get in Touch
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-semibold text-orange-500 uppercase tracking-[0.12em] text-center max-w-3xl mx-auto leading-relaxed px-4">
              Ready to strengthen your digital risk capability? Let's start a
              conversation.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT SECTION
      ===================================================== */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0D0D0D]">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">

            {/* =================================================
                CONTACT FORM
            ================================================= */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-[#151515] border border-[#3A301F] rounded-lg p-5 sm:p-6 md:p-8">

                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">
                  Send Us a Message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >

                  {/* NAME + EMAIL */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs sm:text-sm font-medium mb-2 text-white"
                      >
                        Name *
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-medium mb-2 text-white"
                      >
                        Email *
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder="your@email.com"
                      />
                    </div>

                  </div>

                  {/* ORGANIZATION */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs sm:text-sm font-medium mb-2 text-white"
                    >
                      Organization
                    </label>

                    <input
                      id="organization"
                      type="text"
                      name="organization"
                      autoComplete="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className={inputBase}
                      placeholder="Your organization"
                    />
                  </div>

                  {/* INTEREST */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-xs sm:text-sm font-medium mb-2 text-white"
                    >
                      I'm interested in *
                    </label>

                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className={`${inputBase} cursor-pointer`}
                    >
                      <option value="advisory">Advisory Services</option>
                      <option value="academy">Academy Programmes</option>
                      <option value="partnership">
                        Partnership Opportunities
                      </option>
                      <option value="speaking">
                        Speaking Engagements
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-medium mb-2 text-white"
                    >
                      Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`${inputBase} resize-none`}
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  {/* SEND BUTTON */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full min-h-13 px-6 sm:px-8 py-3.5 sm:py-4 bg-orange-500 text-[#0D0D0D] rounded-md font-semibold hover:bg-orange-600 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* STATUS MESSAGES */}
                  <AnimatePresence>

                    {/* SUCCESS */}
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        role="status"
                        className="flex items-start gap-3 bg-orange-500/10 border border-orange-500/30 text-white text-sm rounded-md p-4"
                      >
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-orange-500" />

                        <span>
                          Thanks — we've received your message and will reply
                          within 24 hours on business days.
                        </span>
                      </motion.div>
                    )}

                    {/* ERROR */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-md p-4"
                      >
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />

                        <span>
                          Something went wrong. Please try again.
                        </span>
                      </motion.div>
                    )}

                  </AnimatePresence>

                </form>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT COLUMN
            ================================================= */}
            <motion.div
              className="space-y-5 sm:space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >

              {/* CONTACT INFORMATION */}
              <div className="bg-[#151515] border border-[#3A301F] rounded-lg p-5 sm:p-6">

                <h3 className="text-lg sm:text-xl font-bold mb-5 text-white">
                  Contact Information
                </h3>

                <div className="space-y-5">

                  {/* EMAIL */}
                  <div className="flex items-start gap-3">

                    <Mail className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                    <div className="min-w-0">

                      <div className="font-medium text-white">
                        Email
                      </div>

                      <a
                        href="mailto:info@digitalrisklabs.com"
                        className="text-orange-500 hover:text-orange-400 text-sm break-all font-medium transition-colors"
                      >
                        info@digitalrisklabs.com
                      </a>

                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-3">

                    <Phone className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                    <div>

                      <div className="font-medium text-white">
                        Phone
                      </div>

                      <a
                        href="tel:+1234567890"
                        className="text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors"
                      >
                        +447767472717
                      </a>

                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="flex items-start gap-3">

                    <MapPin className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                    <div>

                      <div className="font-medium text-white">
                        Location
                      </div>

                      <p className="text-orange-500 text-sm font-medium">
                        Global operations with advisory teams worldwide
                      </p>

                    </div>
                  </div>

                </div>
              </div>

              {/* OFFICE HOURS */}
              <div className="bg-[#151515] border border-[#3A301F] rounded-lg p-5 sm:p-6">

                <h3 className="text-lg sm:text-xl font-bold mb-5 text-white">
                  Office Hours
                </h3>

                <div className="space-y-3 text-sm">

                  <div className="flex justify-between gap-4">
                    <span className="text-orange-500 font-medium">
                      Monday - Friday
                    </span>

                    <span className="font-medium text-white text-right">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-orange-500 font-medium">
                      Saturday
                    </span>

                    <span className="font-medium text-white text-right">
                      By Appointment
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-orange-500 font-medium">
                      Sunday
                    </span>

                    <span className="font-medium text-white text-right">
                      Closed
                    </span>
                  </div>

                </div>
              </div>

              {/* QUICK RESPONSE */}
              <div className="bg-[#151515] border border-[#3A301F] rounded-lg p-5 sm:p-6">

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                  Quick Response
                </h3>

                <p className="text-orange-500 text-sm font-medium leading-relaxed">
                  We typically respond to all inquiries within 24 hours during
                  business days.
                </p>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTATION
      ===================================================== */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0D0D0D] border-t border-[#211E18]">

        <div className="container mx-auto px-4 sm:px-6">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-white">
              Prefer to Schedule a Call?
            </h2>

            <p className="text-sm sm:text-base font-semibold text-orange-500 uppercase tracking-[0.12em] mb-7 sm:mb-8">
              Book a consultation directly with our advisory team.
            </p>

            <a
              href="mailto:info@digitalrisklabs.com?subject=Consultation%20Request"
              className="inline-flex items-center gap-2 min-h-13 px-6 sm:px-8 py-3.5 sm:py-4 bg-orange-500 text-[#0D0D0D] rounded-md font-semibold hover:bg-orange-600 active:scale-[0.99] transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Schedule a Consultation</span>
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}