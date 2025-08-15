"use client";

import { FaRegEye } from "react-icons/fa";
import ItemSkill from "../items/ItemSkill";
import ItemWork from "../items/ItemWork";
import Title from "../items/Title";
import { Card } from "antd";

export default function Project() {
  return (
    <div className="p-5 py-20 max-w-5xl mx-auto">
      <div className="text-yellow-500 text-center">
        <Title>
          <span className="text-yellow-500">Portfolio Projects</span>
        </Title>
      </div>
      <div className="mt-5">
        <Card
          data-aos="zoom-in"
          className="bg-purple-950 border-none text-white rounded-3xl"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="bg-purple-900 rounded-3xl">
              <img src="/buku.png" alt="Buku" />
            </div>
            <div>
              <h3 className="font-bold text-3xl">Muslimafiyah Publishing</h3>
              <div className="mt-3">
                <p>Worked On</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <ItemWork text="Website" />
                  <ItemWork text="Admin Panel" />
                  <ItemWork text="POS" />
                </div>
              </div>

              <div className="mt-3">
                <p>Technologies</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <ItemSkill image="react.png" text="React JS" />
                  <ItemSkill image="next.svg" text="Next JS" />
                  <ItemSkill image="tailwind.png" text="Tailwind" />
                  <ItemSkill image="express.png" text="Express JS" />
                  <ItemSkill image="mysql.png" text="MySQL" />
                </div>
              </div>

              <div className="mt-5">
                <a
                  className="px-4 py-2 flex gap-1 w-fit items-center bg-yellow-500 border-2 border-gray-600 hover:text-black hover:bg-yellow-400 rounded-full"
                  href={"https://muslimafiyahpublishing.com/"}
                >
                  <FaRegEye className="text-lg" />
                  View
                </a>
              </div>
            </div>
          </div>
        </Card>

        <Card
          data-aos="zoom-in"
          className="bg-sky-950 border-none text-white rounded-3xl mt-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="bg-sky-900 rounded-3xl">
              <img src="/ebook.png" alt="Quran" />
            </div>
            <div>
              <h3 className="font-bold text-3xl">Ebook Platform</h3>
              <div className="mt-3">
                <p>Worked On</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <ItemWork text="Website" />
                  <ItemWork text="Admin Panel" />
                </div>
              </div>

              <div className="mt-3">
                <p>Technologies</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <ItemSkill image="react.png" text="React JS" />
                  <ItemSkill image="next.svg" text="Next JS" />
                  <ItemSkill image="tailwind.png" text="Tailwind" />
                  <ItemSkill image="express.png" text="Express JS" />
                  <ItemSkill image="mysql.png" text="MySQL" />
                </div>
              </div>

              <div className="mt-5">
                <a
                  className="px-4 py-2 flex gap-1 w-fit items-center bg-yellow-500 border-2 border-gray-600 hover:text-black hover:bg-yellow-400 rounded-full"
                  href={"https://ebook.muslimafiyahpublishing.com/"}
                >
                  <FaRegEye className="text-lg" />
                  View
                </a>
              </div>
            </div>
          </div>
        </Card>

        <Card
          data-aos="zoom-in"
          className="bg-red-950 border-none text-white rounded-3xl mt-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="bg-red-900 rounded-3xl">
              <img src="/quran.png" alt="Quran" />
            </div>
            <div>
              <h3 className="font-bold text-3xl">Qur'an APP</h3>
              <div className="mt-3">
                <p>Worked On</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <ItemWork text="Website" />
                </div>
              </div>

              <div className="mt-3">
                <p>Technologies</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <ItemSkill image="react.png" text="React JS" />
                </div>
              </div>

              <div className="mt-5">
                <a
                  className="px-4 py-2 flex gap-1 w-fit items-center bg-yellow-500 border-2 border-gray-600 hover:text-black hover:bg-yellow-400 rounded-full"
                  href={"https://myquran-peach.vercel.app/"}
                >
                  <FaRegEye className="text-lg" />
                  View
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
