// items/ItemSkill.jsx
"use client";

import React from "react";

export default function ItemSkill({ image = "", text = "" }) {
  return (
    <div
      data-aos="zoom-in"
      className="group flex items-center gap-3 bg-gray-800/50 border border-gray-700/50 px-4 py-2.5 rounded-2xl hover:border-yellow-500/50 hover:bg-gray-800 transition-all duration-300 shadow-md"
    >
      <div className="w-6 h-6 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
        <img
          src={`/${image}`}
          alt={text}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
        {text}
      </span>
    </div>
  );
}
