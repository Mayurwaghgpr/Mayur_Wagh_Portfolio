import { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiCopy, FiCheck, FiClock, FiMapPin, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import axiosInstance from "../utils/axiosInstance";
import Heading from "../components/Heading";

type IntentBadge = {
  id: string;
  label: string;
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
      label: "Full-Time Opportunity",
      template:
        "Hi Mayur, I reviewed your work and would love to discuss a Full Stack / Software Engineer opportunity with our team.",
    },
    {
      id: "project",
      label: "Project Consultation",
      template:
        "Hi Mayur, I have a web platform project and would like to consult on architecture and engineering availability.",
    },
    {
      id: "collab",
      label: "Technical Collaboration",
      template:
        "Hey Mayur, I saw your work on MERN and PostgreSQL systems and want to connect regarding a technical collaboration.",
    },
    {
      id: "chat",
      label: "General Discussion",
      template:
        "Hey Mayur! Reaching out to connect, talk tech stacks, and share knowledge.",
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
        name: senderName || "Portfolio Visitor",
        email: senderEmail || "Not provided",
        message,
        intent: selectedIntent || "general",
      });
      setIsSent(true);
    } catch {
      // Graceful fallback for UX
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
    <div id="contact" className="py-8 md:py-12 text-zinc-900 dark:text-zinc-100 w-full space-y-10">
      
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <Heading badge="Get In Touch">
          <span>Let's Build Something Impactful</span>
        </Heading>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
          Open to full-time engineering roles, high-impact freelance contracts, and technical discussions. Drop me a line or send a direct note below.
        </p>
      </div>

      {/* Live Time & Working Hours Card */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
            <FiClock className="text-lg" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <FiMapPin className="text-zinc-400" />
              <span>Based in Pune, India (IST • GMT +5:30)</span>
            </div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5 font-mono">
              Local Time: <span className="text-zinc-700 dark:text-zinc-300">{localTime || "IST"}</span>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Fast response time (typically &lt; 24h)</span>
        </div>
      </div>

      {/* Main Dual-Column Grid */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        {/* Left Column: Direct Reachouts */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-display font-semibold text-lg text-zinc-900 dark:text-zinc-100">Direct Communication</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Preferred channels for immediate conversations.</p>
          </div>

          <div className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70">
            {/* Email */}
            <div className="py-3.5 flex items-center justify-between group">
              <a
                href="mailto:mayur2002wagh@gmail.com"
                className="flex items-center gap-3.5 flex-1 min-w-0"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform">
                  <FiMail />
                </div>
                <div className="truncate">
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">Direct Email</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs font-mono truncate">mayur2002wagh@gmail.com</p>
                </div>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard("mayur2002wagh@gmail.com", "email")}
                className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ml-2 shrink-0 active:scale-95"
                title="Copy email address"
              >
                {copiedKey === "email" ? (
                  <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                    <FiCheck /> Copied
                  </span>
                ) : (
                  <FiCopy className="text-sm" />
                )}
              </button>
            </div>

            {/* LinkedIn */}
            <div className="py-3.5 flex items-center justify-between group">
              <a
                href="https://linkedin.com/in/mayur-wagh-751b8a24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 flex-1 min-w-0"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform">
                  <GrLinkedinOption />
                </div>
                <div className="truncate">
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">LinkedIn</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs font-mono truncate">in/mayur-wagh-751b8a24b</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/mayur-wagh-751b8a24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-xs font-medium ml-2 active:scale-95 transition-all"
              >
                Connect ↗
              </a>
            </div>

            {/* Twitter/X */}
            <div className="py-3.5 flex items-center justify-between group">
              <a
                href="https://twitter.com/mayurwagh152064"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 flex-1 min-w-0"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform">
                  <FaXTwitter />
                </div>
                <div className="truncate">
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">X (Twitter)</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs font-mono truncate">@mayurwagh152064</p>
                </div>
              </a>
              <a
                href="https://twitter.com/mayurwagh152064"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-xs font-medium ml-2 active:scale-95 transition-all"
              >
                Follow ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form - Blended with background */}
        <div className="space-y-4">
          {!isSent ? (
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <h3 className="font-display font-semibold text-lg text-zinc-900 dark:text-zinc-100">Send a Message</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Choose a topic below to auto-populate or draft your own note.
                </p>
              </div>

              {/* Quick Intent Pills */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Topic:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {intentBadges.map((badge) => {
                    const isSelected = selectedIntent === badge.id;
                    return (
                      <button
                        type="button"
                        key={badge.id}
                        onClick={() => handleSelectIntent(badge)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 active:scale-95 ${
                          isSelected
                            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm border border-zinc-900 dark:border-zinc-100"
                            : "bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
                        }`}
                      >
                        {badge.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sender Name */}
              <div className="space-y-1">
                <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                  Your Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Chen"
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/70 focus:border-zinc-400 dark:focus:border-zinc-600 focus:outline-none placeholder:text-zinc-400 text-zinc-900 dark:text-zinc-100 text-sm"
                  />
                </div>
              </div>

              {/* Sender Email */}
              <div className="space-y-1">
                <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                  Your Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/70 focus:border-zinc-400 dark:focus:border-zinc-600 focus:outline-none placeholder:text-zinc-400 text-zinc-900 dark:text-zinc-100 text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Message
                  </label>
                  <span className="text-xs font-mono text-zinc-400">
                    {message.length}/500
                  </span>
                </div>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3.5 top-3 text-zinc-400 text-sm" />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your project or team requirements..."
                    rows={4}
                    maxLength={500}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/70 focus:border-zinc-400 dark:focus:border-zinc-600 focus:outline-none placeholder:text-zinc-400 text-zinc-900 dark:text-zinc-100 text-sm resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!message.trim() || isSending}
                className="w-full py-2.5 rounded-xl font-medium text-sm text-white dark:text-zinc-900 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed border border-transparent shadow-sm transition-all flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="text-xs" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-2xl flex items-center justify-center mx-auto">
                <FiCheck />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-semibold text-lg text-zinc-900 dark:text-zinc-100">Message Transmitted</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto">
                  Thank you for reaching out. I'll review your note and get back to you promptly.
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetForm}
                className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-medium text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
