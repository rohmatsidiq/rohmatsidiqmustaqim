"use client";

import Title from "../items/Title";
import ItemCertificate from "./ItemCertificate";
import { HiOutlineAcademicCap } from "react-icons/hi";

export default function Certificates() {
  const certificateData = [
    {
      logo: "/dicoding.png",
      lembaga: "Dicoding",
      title: "Belajar Dasar Pemrograman Web",
      link: "https://www.dicoding.com/certificates/EYX42GYOJZDL",
    },
    {
      logo: "/dicoding.png",
      lembaga: "Dicoding",
      title: "Belajar Dasar Pemrograman JavaScript",
      link: "https://www.dicoding.com/certificates/6RPNDLQK8Z2M",
    },
    {
      logo: "/dicoding.png",
      lembaga: "Dicoding",
      title: "Belajar Membuat Front-End Web untuk Pemula",
      link: "https://www.dicoding.com/certificates/JMZV18GQNXN9",
    },
    {
      logo: "/dicoding.png",
      lembaga: "Dicoding",
      title: "Belajar Membuat Aplikasi Web dengan React",
      link: "https://www.dicoding.com/certificates/2VX36EE6VXYQ",
    },
    {
      logo: "/codepolitan.png",
      lembaga: "Codepolitan",
      title: "Belajar Dasar HTML",
      link: "https://codepolitan.com/c/GKQEHBV",
    },
    {
      logo: "/codepolitan.png",
      lembaga: "Codepolitan",
      title: "Belajar Dasar CSS",
      link: "https://codepolitan.com/c/OOUAFA6",
    },
    {
      logo: "/codepolitan.png",
      lembaga: "Codepolitan",
      title: "Belajar JavaScript",
      link: "https://codepolitan.com/c/X2J4ABS",
    },
    {
      logo: "/codepolitan.png",
      lembaga: "Codepolitan",
      title: "Belajar Dasar Node.js dan NPM",
      link: "https://codepolitan.com/c/ZLFR4W3",
    },
    {
      logo: "/codepolitan.png",
      lembaga: "Codepolitan",
      title: "Belajar Dasar Express.js",
      link: "https://codepolitan.com/c/JMRLLFE",
    },
    {
      logo: "/codepolitan.png",
      lembaga: "Codepolitan",
      title: "Belajar RESTful dengan Express.js",
      link: "https://codepolitan.com/c/IQSRGSB",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-yellow-500/20">
            <HiOutlineAcademicCap />
            Certifications
          </div>
          <Title>
            <span className="text-yellow-500">Skills Validation</span>
          </Title>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            These certifications represent my commitment to continuous learning
            and professional growth in web development.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificateData.map((cert, index) => (
            <ItemCertificate
              key={index}
              logo={cert.logo}
              lembaga={cert.lembaga}
              title={cert.title}
              link={cert.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
