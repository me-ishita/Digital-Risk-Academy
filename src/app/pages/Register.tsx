import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  Mail,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  Loader2,
  CreditCard,
  AlertTriangle,
  LogIn,
  UserPlus,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  COURSE_DETAILS,
  signupUser,
  loginUser,
} from "../lib/api";

type Stage = "signup" | "login" | "course";

export function Register() {
  const searchParams = new URLSearchParams(window.location.search);
  const initialCourse = searchParams.get("course") || "investment-banking";

  const [stage, setStage] = useState<Stage>("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<string>(initialCourse);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [payingWith, setPayingWith] = useState<'stripe' | 'paypal' | null>(null);
  const [interest, setInterest] = useState("");
  const courseConfig =
    COURSE_DETAILS[selectedCourse] || COURSE_DETAILS["investment-banking"];

  useEffect(() => {
    try {
      const session = localStorage.getItem("dra_session");
      if (session) {
        const parsed = JSON.parse(session);
        if (parsed?.email) {
          setName(asText(parsed.name));
          setEmail(asText(parsed.email));
          setPhone(asText(parsed.phone));
          setOrganization(asText(parsed.organization));
          setStage("course");
        }
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputBase =
    "w-full px-4 py-3 text-base bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition";

  const handleSignup = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg("Please provide your name, email, and phone.");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!isValidPhone(phone)) {
      setErrorMsg("Please enter a valid phone number (7–15 digits, optional + prefix).");
      return;
    }
    setErrorMsg(null);
    setInfoMsg(null);
    setSubmitting(true);
    try {
      await signupUser({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        organization: organization.trim() || undefined,
      });
      setInfoMsg("Signed up successfully. Please log in to continue.");
      setStage("login");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "unknown_error";
      setErrorMsg(friendlyError(msg));
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg("Please enter the email you signed up with.");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg(null);
    setInfoMsg(null);
    setSubmitting(true);
    try {
      const result = await loginUser(email.trim());
      setName(asText(result.user.name));
      setEmail(asText(result.user.email));
      setPhone(asText(result.user.phone));
      setOrganization(asText(result.user.organization));
      localStorage.setItem("dra_session", JSON.stringify(result.user));
      setStage("course");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "unknown_error";
      setErrorMsg(friendlyError(msg));
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dra_session");
    setName("");
    setEmail("");
    setPhone("");
    setOrganization("");
    setErrorMsg(null);
    setInfoMsg(null);
    setStage("signup");
  };

  const handleCancelPaying = () => {
    setPayingWith(null);
    localStorage.removeItem("dra_pending_order");
    localStorage.removeItem("dra_pending_course");
  };

  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) setPayingWith(null);
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  const handlePay = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const checkoutUrl = courseConfig.noCodeLink;
    if (!checkoutUrl) {
      setErrorMsg(friendlyError("payment_not_configured"));
      return;
    }

    setPayingWith('stripe');
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    localStorage.setItem("dra_pending_order", orderId);
    localStorage.setItem("dra_pending_course", selectedCourse);
    window.location.href = checkoutUrl;
  };

  const handlePayPal = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const checkoutUrl = courseConfig.paypalLink;
    if (!checkoutUrl) {
      setErrorMsg("PayPal is not configured for this course.");
      return;
    }

    setPayingWith('paypal');
    const orderId = `ord_pp_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    localStorage.setItem("dra_pending_order", orderId);
    localStorage.setItem("dra_pending_course", selectedCourse);
    window.location.href = checkoutUrl;
  };

  return (
    <div className="pt-32 relative">
      {/* Back Button */}
      <div className="absolute top-6 left-4 z-50">
        <Link
          to="/programs"
          className="flex items-center justify-center w-10 h-10 bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-300 rounded-full hover:text-white hover:border-slate-700 transition-all shadow-lg"
          aria-label="Back to Academy"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 text-orange-400 text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
              <GraduationCap className="w-4 h-4" />
              Digital Risk Academy
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              {stage === "signup" && "Sign Up"}
              {stage === "login" && "Log In"}
              {stage === "course" && "Choose Your Course"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300">
              {stage === "signup" &&
                "Create your account in a few seconds."}
              {stage === "login" &&
                "Enter your email to continue to course selection."}
              {stage === "course" &&
                "Pick a programme and pay securely via Stripe or PayPal."}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6 md:p-8 min-h-[400px]">
                <AnimatePresence mode="wait">
                  {stage === "signup" && (
                    <motion.div
                      key="signup"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <h2 className="text-xl sm:text-2xl font-bold mb-2">
                        Step 1 — Create Your Account
                      </h2>
                      <p className="text-slate-400 text-sm mb-6">
                        Provide your details to create your Digital Risk Academy account.
                      </p>

                      <form onSubmit={handleSignup} className="space-y-5 sm:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name *</label>
                            <input
                              id="fullName"
                              name="fullName"
                              autoComplete="name"
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className={inputBase}
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                            <input
                              id="email"
                              name="email"
                              autoComplete="email"
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className={inputBase}
                              placeholder="you@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone *</label>
                            <input
                              id="phone"
                              name="phone"
                              autoComplete="tel"
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className={inputBase}
                              placeholder="+91 98765 43210"
                            />
                          </div>
                          <div>
                            <label htmlFor="organization" className="block text-sm font-medium mb-2">
                              Organization / University
                            </label>
                            <input
                              id="organization"
                              name="organization"
                              autoComplete="organization"
                              type="text"
                              value={organization}
                              onChange={(e) => setOrganization(e.target.value)}
                              className={inputBase}
                              placeholder="Your organization"
                            />
                          </div>
                          <div>
  <label htmlFor="interest" className="block text-sm font-medium mb-2">
    Drop your interest
  </label>
  <select
    id="interest"
    value={interest}
    onChange={(e) => setInterest(e.target.value)}
    className={inputBase}
  >
    <option value="">Select your interest</option>
    <option value="investment-banking">Investment Banking Programme</option>
    <option value="digital-risk">Digital Risk Fundamentals</option>
    <option value="cyber-resilience">Cyber Resilience Practitioner</option>
    <option value="ai-risk">AI Risk Governance</option>
  </select>
</div>
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Creating account…</span>
                            </>
                          ) : (
                            <>
                              <UserPlus className="w-5 h-5" />
                              <span>Sign Up</span>
                            </>
                          )}
                        </button>

                        <p className="text-sm text-slate-400 text-center">
                          Already have an account?{" "}
                          <button
                            type="button"
                            onClick={() => {
                              setErrorMsg(null);
                              setInfoMsg(null);
                              setStage("login");
                            }}
                            className="text-orange-400 hover:text-orange-300 font-medium"
                          >
                            Log in
                          </button>
                        </p>

                        {errorMsg && (
                          <div
                            role="alert"
                            className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-lg p-4"
                          >
                            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span>{errorMsg}</span>
                          </div>
                        )}
                      </form>
                    </motion.div>
                  )}

                  {stage === "login" && (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <h2 className="text-xl sm:text-2xl font-bold mb-2">
                        Log In
                      </h2>
                      <p className="text-slate-400 text-sm mb-6">
                        Enter the email you signed up with.
                      </p>

                      {infoMsg && (
                        <div
                          role="status"
                          className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 text-green-300 text-sm rounded-lg p-4 mb-6"
                        >
                          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                          <span>{infoMsg}</span>
                        </div>
                      )}

                      <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
                        <div>
                          <label htmlFor="loginEmail" className="block text-sm font-medium mb-2">Email *</label>
                          <input
                            id="loginEmail"
                            name="email"
                            autoComplete="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputBase}
                            placeholder="you@example.com"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Logging in…</span>
                            </>
                          ) : (
                            <>
                              <LogIn className="w-5 h-5" />
                              <span>Log In</span>
                            </>
                          )}
                        </button>

                        <p className="text-sm text-slate-400 text-center">
                          Don't have an account?{" "}
                          <button
                            type="button"
                            onClick={() => {
                              setErrorMsg(null);
                              setInfoMsg(null);
                              setStage("signup");
                            }}
                            className="text-orange-400 hover:text-orange-300 font-medium"
                          >
                            Sign up
                          </button>
                        </p>

                        {errorMsg && (
                          <div
                            role="alert"
                            className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-lg p-4"
                          >
                            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span>{errorMsg}</span>
                          </div>
                        )}
                      </form>
                    </motion.div>
                  )}

                  {stage === "course" && (
                    <motion.div
                      key="course"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h2 className="text-xl sm:text-2xl font-bold">Step 2 — Choose Course & Pay</h2>
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="text-xs text-slate-400 hover:text-orange-400 flex items-center gap-1 shrink-0 mt-1"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          Log out
                        </button>
                      </div>
                      <p className="text-slate-400 text-sm mb-6">
                        Signed in as <span className="text-white">{email}</span>. Select your programme and proceed to payment.
                      </p>

                      <form onSubmit={handlePay} className="space-y-5 sm:space-y-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="course" className="block text-sm font-medium">Selected Course</label>
                          <div className="relative">
                            <select
                              id="course"
                              value={selectedCourse}
                              onChange={(e) => setSelectedCourse(e.target.value)}
                              disabled={payingWith !== null}
                              className={`${inputBase} appearance-none pr-10 bg-slate-950/40 border-slate-800 focus:border-orange-500`}
                            >
                              {Object.entries(COURSE_DETAILS).map(([key, details]) => (
                                <option key={key} value={key} className="bg-slate-900 text-white">
                                  {details.label} - {details.price}
                                </option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={payingWith !== null}
                          className="w-full min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          {payingWith === 'stripe' ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Opening checkout…</span>
                            </>
                          ) : (
                            <>
                              <CreditCard className="w-5 h-5" />
                              <span>Pay with Stripe</span>
                            </>
                          )}
                        </button>

                        {courseConfig.paypalLink && (
                          <button
                            type="button"
                            onClick={handlePayPal}
                            disabled={payingWith !== null}
                            className="w-full min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-[#FFC439] hover:bg-[#f0b429] text-[#003087] rounded-lg font-semibold active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            {payingWith === 'paypal' ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin text-[#003087]" />
                                <span>Opening PayPal…</span>
                              </>
                            ) : (
                              <span className="flex items-center gap-1.5 font-bold">
                                <svg className="h-5" viewBox="0 0 101 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PayPal">
                                  <path d="M12.237 2.43C11.12 1.163 9.104.5 6.386.5H1.044C.647.5.308.796.247 1.189L.002 2.79c-.023.15.032.301.148.407.115.106.271.162.43.151h5.193c2.064 0 3.47.452 4.258 1.382.787.93.967 2.376.535 4.287-.39 1.718-1.152 3.078-2.265 4.037-1.1.95-2.507 1.43-4.18 1.43H1.94l-1.003 6.393c-.036.232.137.443.371.443h3.048c.397 0 .736-.297.797-.69l.033-.17.628-3.983.04-.222c.061-.393.4-.69.797-.69h.501c3.252 0 5.8-.939 7.573-2.792 1.76-1.838 2.764-4.374 2.764-7.36 0-2.067-.682-3.783-1.252-4.783z" fill="#003087"/>
                                  <path d="M38.357 2.43C37.24 1.163 35.224.5 32.506.5h-5.342c-.397 0-.736.296-.797.689l-2.245 14.247c-.036.232.137.443.371.443h3.6c.277 0 .514-.203.557-.477l.638-4.048.04-.222c.061-.393.4-.69.797-.69h1.266c3.252 0 5.8-.939 7.573-2.792 1.76-1.838 2.764-4.374 2.764-7.36 0-2.067-.557-3.622-1.371-4.86z" fill="#009cde"/>
                                  <path d="M19.59 9.115a.697.697 0 00-.688.59l-.046.29-1.73 10.98-.04.253c.04-.256.278-.443.534-.443h3.742c.397 0 .736-.296.797-.689l.033-.17 1.018-6.462.031-.198a.698.698 0 01.688-.59h.44c2.885 0 5.146-.833 6.715-2.474.58-.62 1.058-1.34 1.428-2.145a5.73 5.73 0 01-.27-.099c-.86 1.958-3.007 2.957-6.524 2.957h-5.928z" fill="#012169"/>
                                </svg>
                                Pay with PayPal
                              </span>
                            )}
                          </button>
                        )}

                        {payingWith !== null && (
                          <button
                            type="button"
                            onClick={handleCancelPaying}
                            className="w-full flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-white transition-colors py-2"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            Cancel and go back
                          </button>
                        )}

                        {errorMsg && (
                          <div
                            role="alert"
                            className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-lg p-4"
                          >
                            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span>{errorMsg}</span>
                          </div>
                        )}
                      </form>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              className="space-y-5 sm:space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg sm:text-xl font-bold">What happens next</h3>
                </div>
                <ol className="space-y-3 text-sm text-slate-300 list-decimal list-inside">
                  <li>Sign up with your contact details.</li>
                  <li>Log in with your email.</li>
                  <li>Choose your preferred programme.</li>
                  <li>Pay securely with Stripe.</li>
                  <li>Receive a receipt and course access link.</li>
                </ol>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Need help?</h3>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium">Email</div>
                    <a
                      href="mailto:info@digitalriskacademy.com"
                      className="text-orange-400 hover:text-orange-300 font-medium"
                    >
                      info@digitalriskacademy.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-orange-500/20 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Limited seats</h3>
                <p className="text-slate-300 text-sm">
                  Cohorts are kept small to protect the practitioner-led format. Register early to secure your place.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(asText(email).trim());
}

function isValidPhone(phone: string): boolean {
  const normalized = asText(phone);
  const digits = normalized.replace(/[^\d]/g, "");
  if (digits.length < 7 || digits.length > 15) return false;
  return /^\+?[\d\s\-().]+$/.test(normalized.trim());
}


function asText(value: unknown): string {
  if (typeof value === "string") return value;
  if (value == null) return "";
  return String(value);
}

function friendlyError(code: string): string {
  switch (code) {
    case "already_registered":
      return "An account with this email already exists. Please log in instead.";
    case "not_found":
      return "No account found with that email. Please sign up first.";
    case "network_error":
      return "Network error. Check your connection and try again.";
    case "payment_failed":
      return "Payment was not successful. Please try again or use a different payment method.";
    case "payment_not_configured":
      return "Payments aren't configured yet. Please try again shortly or contact support.";
    case "invalid_input":
      return "Please check the details you entered and try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}
