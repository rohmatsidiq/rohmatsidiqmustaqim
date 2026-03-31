// components/ItemCertificate.jsx
"use client";
import { FiExternalLink } from "react-icons/fi";

export default function ItemCertificate({ logo, lembaga, title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      data-aos="zoom-in"
      className="group relative bg-gray-800/40 border border-gray-700/50 p-5 rounded-2xl flex items-center gap-4 hover:bg-gray-800/80 hover:border-yellow-500/50 transition-all duration-300 shadow-lg"
    >
      {/* Icon/Logo Container */}
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
        <img src={logo} alt={lembaga} className="max-h-full object-contain" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-yellow-500 text-xs font-bold uppercase tracking-wider mb-1">
          {lembaga}
        </p>
        <h4 className="text-white font-semibold text-sm md:text-base leading-tight truncate group-hover:text-yellow-400 transition-colors">
          {title}
        </h4>
      </div>

      {/* Action Icon */}
      <div className="text-gray-500 group-hover:text-yellow-500 transition-colors">
        <FiExternalLink size={18} />
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none"></div>
    </a>
  );
}
