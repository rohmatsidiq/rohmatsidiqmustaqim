"use client";

import { Card } from "antd";
import Title from "../items/Title";
import { MdOutlineDateRange } from "react-icons/md";
import { IoArrowRedo } from "react-icons/io5";

export default function Experience() {
  return (
    <div className="p-5 py-20 max-w-5xl mx-auto">
      <div className="text-yellow-500 text-center">
        <Title>
          <span className="text-yellow-500">Experience</span>
        </Title>
      </div>
      <div className="mt-5">
        <Card data-aos="zoom-in" className="rounded-3xl border-none">
          <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center">
            <div className="bg-black rounded-full items-center flex gap-3 p-3">
              <div className="w-[50px] h-[50px] bg-white p-3 rounded-full overflow-hidden">
                <img src="/muslimafiyah.png" alt="" />
              </div>
              <div className="">
                <p className="text-yellow-500 text-lg font-bold">
                  Muslimafiyah Publishing
                </p>
                <p className="text-white">Yogyakarta, Indonesia</p>
              </div>
            </div>
            {/* <div>
              <div className="bg-yellow-100 px-4 py-2 rounded-full font-bold flex gap-1 items-center">
                <MdOutlineDateRange className="text-xl" />
                <p>JANUARI 2022 - SEKARANG</p>
              </div>
            </div> */}
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-xl">
              Fullstack Web Developer (Fullstack Javascript)
            </h3>
            <div className="mt-3">
              <div className="flex gap-1 items-center">
                <div>
                  <IoArrowRedo />
                </div>
                <p>
                  Design and develop websites using Next.js, Express.js, and
                  MySQL
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <div>
                  <IoArrowRedo />
                </div>
                <p>
                  Integrate third-party shipping APIs for cost estimation and
                  delivery tracking
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <div>
                  <IoArrowRedo />
                </div>
                <p>
                  Integrate payment gateway solutions to enable secure and
                  seamless online transactions
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <div>
                  <IoArrowRedo />
                </div>
                <p>
                  Maintain existing projects and implement new features to
                  enhance functionality and user experience.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card data-aos="zoom-in" className="rounded-3xl border-none mt-3">
          <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center">
            <div className="bg-black rounded-full items-center flex gap-3 p-3">
              <div className="w-[50px] h-[50px] bg-white p-3 rounded-full overflow-hidden">
                <img src="/sun.png" alt="" />
              </div>
              <div className="">
                <p className="text-yellow-500 text-lg font-bold">
                  PT Sun Star Motor
                </p>
                <p className="text-white">Surakarta, Indonesia</p>
              </div>
            </div>
            {/* <div>
              <div className="bg-yellow-100 px-4 py-2 rounded-full font-bold flex gap-1 items-center">
                <MdOutlineDateRange className="text-xl" />
                <p>JANUARI 2022 - SEKARANG</p>
              </div>
            </div> */}
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-xl">IT Programmer (Laravel)</h3>
            <div className="mt-3">
              <div className="flex gap-1 items-center">
                <div>
                  <IoArrowRedo />
                </div>
                <p>
                  Developed and maintained a reporting application built with
                  Laravel and PostgreSQL
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <div>
                  <IoArrowRedo />
                </div>
                <p>
                  Integrated with the main database of the Dealer Management
                  System to process and transform data into comprehensive
                  reporting tools
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card data-aos="zoom-in" className="rounded-3xl border-none mt-3">
          <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center">
            <div className="bg-black rounded-full items-center flex gap-3 p-3">
              <div className="w-[50px] h-[50px] bg-white p-1 flex justify-center items-center rounded-full overflow-hidden">
                <img src="/code_icon.png" alt="" />
              </div>
              <div className="">
                <p className="text-yellow-500 text-lg font-bold">
                  Freelance Programmer
                </p>
                <p className="text-white">Sukoharjo, Indonesia</p>
              </div>
            </div>
            {/* <div>
              <div className="bg-yellow-100 px-4 py-2 rounded-full font-bold flex gap-1 items-center">
                <MdOutlineDateRange className="text-xl" />
                <p>JANUARI 2022 - SEKARANG</p>
              </div>
            </div> */}
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-xl">
              Programmer Web And Mobile (Android)
            </h3>
            <div className="mt-3">
              <div className="flex gap-1 items-center">
                <div>
                  <IoArrowRedo />
                </div>
                <p>
                  Developed and maintained websites and Android applications
                  using Full-Stack JavaScript and PHP Laravel
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
