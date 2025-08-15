"use client";

import ItemStack from "../items/ItemStack";
import SubTitle from "../items/SubTitle";
import Title from "../items/Title";
import { Button } from "antd";
import { ImUserTie } from "react-icons/im";

export default function Hero() {
  return (
    <div className="p-5 py-20 text-center">
      <Title>
        👋 Hello, I'm{" "}
        <span className="text-yellow-500">Rohmat Sidiq Mustaqim</span>
      </Title>
      <div className="mt-2">
        <SubTitle>
          A Web Developer with{" "}
          <span className="bg-gray-800 text-yellow-500 px-3 py-1 rounded-full">
            5+ Years
          </span>{" "}
          Experience
        </SubTitle>
      </div>
      {/* <div className="mt-5">
        <Button
          data-aos="zoom-in"
          type="primary"
          size="large"
          shape="round"
          icon={<ImUserTie />}
        >
          Hire Me
        </Button>
      </div> */}

      <div className="mt-20 relative w-fit mx-auto">
        <img
          src="/foto.png"
          alt="programmer"
          className="w-full max-w-[550px] mx-auto rounded-full border-[6px] border-yellow-500 p-2"
        />
        {/* <div className="absolute top-2">
          <ItemStack image="react.png" text="React JS" />
        </div>
        <div className="absolute top-3 right-20">
          <ItemStack image="next.svg" text="Next JS" />
        </div>
        <div className="absolute bottom-20 right-3">
          <ItemStack image="js.png" text="JavaScript" />
        </div>
        <div className="absolute bottom-20 left-3">
          <ItemStack image="express.png" text="Express JS" />
        </div>
        <div className="flex justify-center">
          <div className="absolute bottom-10">
            <ItemStack image="tailwind.png" text="Tailwind" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
