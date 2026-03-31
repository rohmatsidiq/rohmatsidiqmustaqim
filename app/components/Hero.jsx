"use client";

import ItemStack from "../items/ItemStack";
import SubTitle from "../items/SubTitle";
import Title from "../items/Title";
import { Button } from "antd";
import { ImUserTie } from "react-icons/im";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-5 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Bagian Teks (Kiri) */}
        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
          <Title>
            👋 Hello, I'm{" "}
            <span className="text-yellow-500 block lg:inline">
              Rohmat Sidiq Mustaqim
            </span>
          </Title>

          <div className="mt-4">
            <SubTitle>
              A Web Developer with{" "}
              <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                5+ Years
              </span>{" "}
              Experience
            </SubTitle>
          </div>

          <p className="mt-6 text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I build high-performance web applications using modern technologies.
            Focused on clean code, scalability, and user-centric design.
          </p>

          <div className="mt-8">
            <Button
              type="primary"
              size="large"
              shape="round"
              icon={<ImUserTie />}
              className="bg-yellow-500 border-none hover:bg-yellow-400 h-12 px-8 font-bold text-slate-900"
            >
              Hire Me
            </Button>
          </div>
        </div>

        {/* Bagian Foto & Stack (Kanan) */}
        <div
          className="flex-1 relative"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full"></div>

          <div className="relative z-10 w-fit mx-auto">
            <img
              src="/foto.png"
              alt="Rohmat Sidiq"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-3xl border-4 border-yellow-500/50 p-2 shadow-2xl shadow-yellow-500/20 grayscale hover:grayscale-0 transition duration-500"
            />

            {/* ItemStack - Muncul hanya di layar besar agar tidak berantakan */}
            <div className="hidden md:block">
              <div className="absolute -top-5 -left-10 animate-bounce delay-100">
                <ItemStack image="react.png" text="React JS" />
              </div>
              <div className="absolute top-10 -right-10 animate-bounce delay-300">
                <ItemStack image="next.svg" text="Next JS" />
              </div>
              <div className="absolute bottom-20 -right-5 animate-bounce delay-500">
                <ItemStack image="js.png" text="JavaScript" />
              </div>
              <div className="absolute -bottom-5 left-10 animate-bounce delay-700">
                <ItemStack image="tailwind.png" text="Tailwind" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
