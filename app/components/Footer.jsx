import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="m-5">
      <div className="flex justify-center text-center md:justify-between flex-col md:flex-row gap-3 p-4 max-w-5xl mx-auto bg-yellow-500 rounded-xl text-black">
        <div>Rohmat Sidiq M ©{new Date().getFullYear()}</div>
        <div className="flex gap-2 justify-center md:justify-end">
          <a
            className="flex gap-1 w-fit items-center rounded-full"
            href={"https://wa.me/6285227593225"}
          >
            <FaWhatsapp className="text-lg" />
            Whatsapp
          </a>

          <a
            className="flex gap-1 w-fit items-center rounded-full"
            href={"https://github.com/rohmatsidiq"}
          >
            <FaGithub className="text-lg" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
