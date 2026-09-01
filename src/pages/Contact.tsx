import { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiCopy, FiCheck, FiClock, FiMapPin, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import axiosInstance from "../utils/axiosInstance";

type IntentBadge = {
  id: string;
  label: string;
  emoji: string;
  template: string;
};

export default function Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const intentBadges: IntentBadge[] = [
    {
      id: "job",
      label: "Job Offer / Hiring",
      emoji: "🚀",
      template:
        "Hi Mayur, I was impressed by your portfolio and would love to discuss a Software Developer opportunity with you.",
    },
    {
      id: "freelance",
      label: "Freelance Project",
      emoji: "💻",
      template:
        "Hi Mayur, I have a web application project and would like to check your availability for freelance development.",
    },
    {
      id: "collab",
      label: "Tech Collaboration",
      emoji: "🤝",
      template:
        "Hey Mayur, I saw your work on MERN & GraphQL and would love to collaborate on an open-source or tech project.",
    },
    {
      id: "chat",
      label: "Coffee & Tech Chat",
      emoji: "☕",
      template:
        "Hey Mayur! Reaching out to connect, exchange knowledge, and discuss tech stacks.",
    },
  ];

  // Update live clock for India (IST) timezone
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Date().toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectIntent = (badge: IntentBadge) => {
    setSelectedIntent(badge.id);
    setMessage(badge.template);
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSending(true);

    try {
      await axiosInstance.post("/contact", {
        name: senderName || "Anonymous Visitor",
        email: senderEmail || "Not provided",
        message,
        intent: selectedIntent || "general",
      });
      setIsSent(true);
    } catch (error) {
      console.error("Failed to send contact message:", error);
      setIsSent(true);
    } finally {
      setIsSending(false);
    }
  };

  const handleResetForm = () => {
    setMessage("");
    setSenderName("");
    setSenderEmail("");
    setSelectedIntent(null);
    setIsSent(false);
  };

  return (
    <div className="py-10 md:py-14 flex flex-col items-center justify-center text-slate-100 w-full space-y-8">
      {/* Live Time & Availability Banner */}
      <div className="w-full max-w-4xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <FiClock className="text-lg animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <FiMapPin className="text-cyan-400" />
              <span>Based in Pune, India (IST • GMT +5:30)</span>
            </div>
            <div className="text-sm font-bold text-slate-200">
              Local Time: <span className="text-cyan-400 font-mono">{localTime || "12:00:00 PM"}</span>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Online & Available for Hire</span>
        </div>
      </div>

      <div className="w-full max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Direct Contact Options Column */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                Let's Connect
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-100">
                Get in Touch
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you have an exciting job opportunity, a project to build, or just want to discuss tech — drop a note!
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Email Option Card */}
              <div className="w-full group p-4 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex items-center justify-between shadow-md">
                <a
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                  href="mailto:mayur2002wagh@gmail.com"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                    <FiMail />
                  </div>
                  <div className="truncate">
                    <h3 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      Email Me
                    </h3>
                    <p className="text-slate-400 text-xs truncate">
                      mayur2002wagh@gmail.com
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => copyToClipboard("mayur2002wagh@gmail.com", "email")}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2 shrink-0 border border-slate-700/60"
                  title="Copy email address"
                >
                  {copiedKey === "email" ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                      <FiCheck /> Copied
                    </span>
                  ) : (
                    <FiCopy className="text-sm" />
                  )}
                </button>
              </div>

              {/* LinkedIn Option Card */}
              <div className="w-full group p-4 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex items-center justify-between shadow-md">
                <a
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                  href="https://linkedin.com/in/mayur-wagh-751b8a24b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                    <GrLinkedinOption />
                  </div>
                  <div className="truncate">
                    <h3 className="text-sm font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">
                      LinkedIn
                    </h3>
                    <p className="text-slate-400 text-xs truncate">
                      in/mayur-wagh-751b8a24b
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => copyToClipboard("https://linkedin.com/in/mayur-wagh-751b8a24b/", "linkedin")}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2 shrink-0 border border-slate-700/60"
                  title="Copy LinkedIn profile link"
                >
                  {copiedKey === "linkedin" ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                      <FiCheck /> Copied
                    </span>
                  ) : (
                    <FiCopy className="text-sm" />
                  )}
                </button>
              </div>

              {/* Twitter/X Option Card */}
              <div className="w-full group p-4 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex items-center justify-between shadow-md">
                <a
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                  href="https://twitter.com/mayurwagh152064"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                    <FaXTwitter />
                  </div>
                  <div className="truncate">
                    <h3 className="text-sm font-semibold text-slate-100 group-hover:text-purple-300 transition-colors">
                      Follow on X
                    </h3>
                    <p className="text-slate-400 text-xs truncate">
                      @mayurwagh152064
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => copyToClipboard("@mayurwagh152064", "twitter")}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2 shrink-0 border border-slate-700/60"
                  title="Copy Twitter handle"
                >
                  {copiedKey === "twitter" ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                      <FiCheck /> Copied
                    </span>
                  ) : (
                    <FiCopy className="text-sm" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="w-full">
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-5 relative overflow-hidden">
              
              {!isSent ? (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-100">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-400">
                      Select a topic badge below to pre-fill a message template.
                    </p>
                  </div>

                  {/* Smart Intent Badges */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Quick Topics:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {intentBadges.map((badge) => {
                        const isSelected = selectedIntent === badge.id;
                        return (
                          <button
                            type="button"
                            key={badge.id}
                            onClick={() => handleSelectIntent(badge)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 border cursor-pointer ${
                              isSelected
                                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-sm"
                                : "bg-slate-800/60 text-slate-300 border-slate-700/60 hover:bg-slate-800 hover:text-white"
                            }`}
                          >
                            <span>{badge.emoji}</span>
                            <span>{badge.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                      <input
                        type="text"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none placeholder:text-slate-500 text-slate-200 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Your Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                      <input
                        type="email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none placeholder:text-slate-500 text-slate-200 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Message
                      </label>
                      <span className="text-[11px] text-slate-500">
                        {message.length}/500
                      </span>
                    </div>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3.5 top-3 text-slate-500 text-sm" />
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your message here..."
                        rows={4}
                        maxLength={500}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none placeholder:text-slate-500 text-slate-200 text-sm transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={!message.trim() || isSending}
                    className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700/50 shadow-lg transition-all duration-200 cursor-pointer group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSending ? (
                        <>
                          <span className="animate-spin text-lg">🚀</span>
                          <span>Launching Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiSend className="text-base group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              ) : (
                /* Success Card Animation State */
                <div className="py-8 flex flex-col items-center text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 text-3xl shadow-lg shadow-emerald-950/50">
                    <FiCheck />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-slate-100">
                      Message Sent! 🚀
                    </h3>
                    <p className="text-sm text-slate-300 max-w-xs mx-auto">
                      Thank you for reaching out. I have received your message and will get back to you shortly!
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
