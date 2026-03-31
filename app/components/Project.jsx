"use client";

import { FaRegEye } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import ItemSkill from "../items/ItemSkill";
import ItemWork from "../items/ItemWork";
import Title from "../items/Title";

export default function Project() {
  const projects = [
    {
      title: "Muslimafiyah Publishing",
      desc: "A comprehensive publishing platform including an integrated POS system and admin dashboard.",
      image: "/buku.png",
      color: "from-purple-900/40 to-purple-950",
      imgBg: "bg-purple-900/50",
      link: "https://muslimafiyahpublishing.com/",
      work: ["Website", "Admin Panel", "POS"],
      tech: [
        { img: "react.png", name: "React JS" },
        { img: "next.svg", name: "Next JS" },
        { img: "tailwind.png", name: "Tailwind" },
        { img: "express.png", name: "Express JS" },
        { img: "mysql.png", name: "MySQL" },
      ],
    },
    {
      title: "Ebook Platform",
      desc: "Digital reading experience with secure access and efficient content management.",
      image: "/ebook.png",
      color: "from-sky-900/40 to-sky-950",
      imgBg: "bg-sky-900/50",
      link: "https://ebook.muslimafiyahpublishing.com/",
      work: ["Website", "Admin Panel"],
      tech: [
        { img: "react.png", name: "React JS" },
        { img: "next.svg", name: "Next JS" },
        { img: "tailwind.png", name: "Tailwind" },
        { img: "express.png", name: "Express JS" },
      ],
    },
    {
      title: "Qur'an APP",
      desc: "Simple and clean Al-Qur'an application for daily digital reading.",
      image: "/quran.png",
      color: "from-red-900/40 to-red-950",
      imgBg: "bg-red-900/50",
      link: "https://myquran-peach.vercel.app/",
      work: ["Website"],
      tech: [
        { img: "react.png", name: "React JS" },
        { img: "tailwind.png", name: "Tailwind" },
      ],
    },
  ];

  return (
    <section className="bg-slate-900 py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <Title>
            <span className="text-yellow-500">Selected Projects</span>
          </Title>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-20">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center bg-gradient-to-br ${proj.color} p-6 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group`}
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors duration-700"></div>

              {/* Image Preview */}
              <div
                className={`flex-1 w-full ${proj.imgBg} rounded-[2rem] overflow-hidden p-4 aspect-video flex items-center justify-center relative shadow-inner`}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 space-y-6">
                <div className="flex gap-2 flex-wrap">
                  {proj.work.map((w, i) => (
                    <ItemWork key={i} text={w} />
                  ))}
                </div>

                <h3 className="text-white font-extrabold text-4xl lg:text-5xl tracking-tight">
                  {proj.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {proj.desc}
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <p className="text-white/50 text-sm font-semibold uppercase tracking-widest">
                    Technologies
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {proj.tech.map((t, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-xl border border-white/5"
                      >
                        <img
                          src={`/${t.img}`}
                          className="h-4 w-4 object-contain"
                          alt=""
                        />
                        <span className="text-xs text-white/80">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    className="group/btn px-8 py-4 flex gap-2 items-center bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-2xl transition-all shadow-lg shadow-yellow-500/20"
                  >
                    <FaRegEye className="text-xl" />
                    Live Preview
                    <FiArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
