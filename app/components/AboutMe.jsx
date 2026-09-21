"use client";

import Title from "../items/Title";

export default function AboutMe() {
  return (
    <section className="p-5 py-24 bg-slate-900 overflow-hidden" id="about">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <Title>
            <span className="text-yellow-500">About Me</span>
          </Title>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Kiri: Stats & Photo Profile */}
          <div
            className="lg:col-span-4 flex flex-col gap-6"
            data-aos="fade-right"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-gray-800 p-6 rounded-3xl border border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-500/50 p-1 rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <img
                      src="/foto.jpeg"
                      alt="Rohmat"
                      className="w-full h-full object-cover rounded-full shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl tracking-wider">
                      Rohmat Sidiq
                    </h4>
                    <p className="text-yellow-500 text-sm font-medium">
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-3xl flex justify-around items-center">
              <div className="text-center">
                <p className="font-extrabold text-5xl text-yellow-500">5+</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                  Years Exp
                </p>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <p className="font-extrabold text-5xl text-yellow-500">50+</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                  Projects
                </p>
              </div>
            </div>
          </div>

          {/* Kanan: Description */}
          <div className="lg:col-span-8" data-aos="fade-left">
            <div className="relative">
              {/* Dekorasi Quote Icon */}
              <span className="absolute -top-10 -left-4 text-8xl text-gray-800 font-serif leading-none select-none opacity-50">
                “
              </span>

              <div className="bg-gray-800/30 border border-gray-700/50 p-8 lg:p-10 rounded-[2rem] relative z-10">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a{" "}
                  <span className="text-white font-semibold">
                    Software Engineer
                  </span>{" "}
                  with a mission to bridge the gap between complex backend logic
                  and elegant frontend interfaces.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Since I started my journey 5 years ago, I've been obsessed
                  with creating efficient, scalable, and user-centric web
                  applications. I don't just write code; I build digital
                  solutions that solve real-world problems.
                </p>

                {/* Checklist Kecil untuk Skill Highlight */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    "Problem Solver",
                    "Fast Learner",
                    "Clean Code",
                    "Scalable Architecture",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
