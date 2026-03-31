"use client";

import Title from "../items/Title";
import ItemSkill from "../items/ItemSkill";
import { HiOutlineLightningBolt } from "react-icons/hi";

export default function Skill() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { image: "html.png", text: "HTML" },
        { image: "css.png", text: "CSS" },
        { image: "js.png", text: "JavaScript" },
        { image: "react.png", text: "React JS" },
        { image: "next.svg", text: "Next JS" },
        { image: "tailwind.png", text: "Tailwind" },
        { image: "bootstrap.png", text: "Bootstrap" },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { image: "node.png", text: "Node JS" },
        { image: "express.png", text: "Express JS" },
        { image: "php.png", text: "PHP" },
        { image: "laravel.png", text: "Laravel" },
      ],
    },
    {
      title: "Database Management",
      skills: [
        { image: "mysql.png", text: "MySQL" },
        { image: "postgre.png", text: "Postgre SQL" },
        { image: "mongo.svg", text: "MongoDB" },
      ],
    },
  ];

  return (
    <section className="bg-slate-900 py-24 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-yellow-500/20">
            <HiOutlineLightningBolt />
            Tech Stack
          </div>
          <Title>
            <span className="text-yellow-500">Skills & Tools</span>
          </Title>
          <p className="text-gray-400 mt-3">
            The technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Kategori Skill */}
        <div className="space-y-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-yellow-500 rounded-full"></span>
                {cat.title}
              </h3>
              <div className="flex gap-3 flex-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <ItemSkill key={sIdx} image={skill.image} text={skill.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
