import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";

export default function Contact() {
  const [message, setMessage] = useState("");

  // Handels PostCard message
  const sendPostcard = async () => {
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Options */}
          <div className="space-y-6">
            <div className="text-center md:text-left mb-8">
              <h2 className="text-3xl font-bold mb-3 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-lg opacity-70">
                Choose your preferred way to connect
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Option */}
              <a
                className="w-full group p-6 rounded-2xl  transition-all duration-300 text-left"
                href="mailto:mayur2002wagh@gmail.com"
                aria-label="Email"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <FiMail />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Me</h3>
                    <p className="opacity-70 text-sm">
                      Send me a direct email message
                    </p>
                  </div>
                  <div className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </a>

              {/* LinkedIn Option */}
              <a
                className="w-full group p-6 rounded-2xl   transition-all duration-300 text-left"
                href="https://linkedin.com/in/mayur-wagh-751b8a24b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{ transitionDelay: "200ms" }}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <GrLinkedinOption className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
                    <p className="opacity-70 text-sm">
                      Connect with me professionally
                    </p>
                  </div>
                  <div className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </a>

              {/* Twitter/X Option */}
              <a
                className="w-full group p-6 rounded-2xl  transition-all duration-300 text-left"
                href="https://twitter.com/mayurwagh152064"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <FaXTwitter className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Follow on X</h3>
                    <p className="opacity-70 text-sm">
                      Connect with me on X (Twitter)
                    </p>
                  </div>
                  <div className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Message Form */}
          <div className="w-full">
            <div
              id="postcard"
              className="backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 tracking-tight">
                  Send a Message
                </h2>
                <p className="text-sm opacity-60">Or leave a message here</p>
              </div>

              <div className="space-y-6">
                {/* Message Textarea */}
                <div className="group">
                  <label className="block text-sm font-medium opacity-70 mb-2 group-focus-within:opacity-100 transition-opacity">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    rows={4}
                    className="w-full p-4 rounded-xl border border-white/20 focus:border-white/40 focus:outline-none placeholder:opacity-40 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 resize-none"
                  />
                  <div className="flex justify-end mt-2">
                    <span className="text-xs opacity-50">
                      {message.length}/500
                    </span>
                  </div>
                </div>

                {/* Send Button */}
                <button
                  onClick={sendPostcard}
                  disabled={!message.trim()}
                  className="w-full py-4 rounded-xl font-semibold tracking-wide bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 disabled:from-white/5 disabled:to-white/5 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 hover:border-white/30 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <span className="text-lg">🚀</span>
                  </span>
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="flex justify-center mt-8 opacity-30">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
