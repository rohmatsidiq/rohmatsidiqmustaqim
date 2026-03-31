"use client";

import React from "react";
import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 pb-10 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Card */}
        <div className="bg-gray-800/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px]"></div>

          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Let's work <span className="text-yellow-500">together.</span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              I'm currently available for freelance work or full-time positions.
              Have a project in mind? Let's talk!
            </p>
          </div>

          {/* Social Links */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a
              href="https://wa.me/6285227593225"
              target="_blank"
              className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-6 py-3 rounded-2xl hover:bg-[#25D366] hover:text-white transition-all duration-300 font-bold"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>

            <a
              href="https://github.com/rohmatsidiq"
              target="_blank"
              className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-6 py-3 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>

            {/* Tambahan LinkedIn jika ada */}
            <a
              href="#"
              className="flex items-center gap-2 bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/20 px-6 py-3 rounded-2xl hover:bg-[#0A66C2] hover:text-white transition-all duration-300 font-bold"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
          </div>

          <div className="w-full h-px bg-white/5 mb-8"></div>

          {/* Bottom Bar */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 text-sm font-medium">
              © {new Date().getFullYear()}{" "}
              <span className="text-white">Rohmat Sidiq Mustaqim</span>. All
              rights reserved.
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Back to top
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-all">
                <FiArrowUp />
              </div>
            </button>
          </div>
        </div>

        {/* Small Tagline */}
        <p className="text-center text-gray-600 text-xs mt-8 italic">
          Built with Next.js, Tailwind CSS, and a lot of ☕
        </p>
      </div>
    </footer>
  );
}
