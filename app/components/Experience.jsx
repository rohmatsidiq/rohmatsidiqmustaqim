"use client";

import { Card } from "antd";
import Title from "../items/Title";
import { MdOutlineDateRange, MdLocationOn } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";

export default function Experience() {
  const experiences = [
    {
      company: "Muslimafiyah Publishing",
      location: "Yogyakarta, Indonesia",
      role: "Fullstack Web Developer",
      stack: "Fullstack Javascript",
      logo: "/muslimafiyah.png",
      points: [
        "Design and develop websites using Next.js, Express.js, and MySQL",
        "Integrate third-party shipping APIs for cost estimation and delivery tracking",
        "Integrate payment gateway solutions (Midtrans/Xendit) for secure transactions",
        "Maintain existing projects and implement new features to enhance UX",
      ],
    },
    {
      company: "PT Sun Star Motor",
      location: "Surakarta, Indonesia",
      role: "IT Programmer",
      stack: "Laravel",
      logo: "/sun.png",
      points: [
        "Developed and maintained reporting applications built with Laravel and PostgreSQL",
        "Integrated with Dealer Management System database to process reporting tools",
      ],
    },
    {
      company: "Freelance Programmer",
      location: "Sukoharjo, Indonesia",
      role: "Programmer Web & Mobile",
      stack: "Full-Stack JS & PHP",
      logo: "/code_icon.png",
      points: [
        "Developed and maintained websites and Android applications using React Native and Laravel",
      ],
    },
  ];

  return (
    <section className="bg-slate-900 py-24 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <Title>
            <span className="text-yellow-500">Work Experience</span>
          </Title>
          <p className="text-gray-400 mt-2">
            My professional journey in software development
          </p>
        </div>

        <div className="relative border-l-2 border-yellow-500/30 ml-4 md:ml-10 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              {/* Dot Timeline */}
              <div className="absolute -left-[41px] top-0 w-5 h-5 bg-slate-900 border-4 border-yellow-500 rounded-full z-10"></div>

              <div className="bg-gray-800/40 border border-gray-700/50 rounded-[2rem] p-6 md:p-8 hover:bg-gray-800/60 transition-all duration-300 group shadow-xl">
                {/* Header Card */}
                <div className="flex flex-col md:flex-row justify-between gap-4 md:items-start mb-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-2 shadow-inner overflow-hidden shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="max-h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-yellow-500 text-xl font-extrabold tracking-tight group-hover:text-yellow-400 transition-colors">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                        <MdLocationOn className="text-yellow-500/70" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1.5 rounded-full text-xs font-bold border border-yellow-500/20 self-start">
                    <HiOutlineCode className="text-sm" />
                    {exp.stack}
                  </div>
                </div>

                {/* Job Info */}
                <div className="space-y-4">
                  <h4 className="text-white text-lg font-bold flex items-center gap-2">
                    {exp.role}
                  </h4>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-400 leading-relaxed group/item"
                      >
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform"></span>
                        <p className="group-hover/item:text-gray-200 transition-colors">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
