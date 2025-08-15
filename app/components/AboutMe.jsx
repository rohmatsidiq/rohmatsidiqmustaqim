import Title from "../items/Title";

export default function AboutMe() {
  return (
    <div className="p-5 py-20 max-w-5xl mx-auto">
      <div className="text-yellow-500 text-center">
        <Title>
          <span className="text-yellow-500">About Me</span>
        </Title>
      </div>
      <div className="flex gap-3 items-center mt-10">
        <div
          data-aos="zoom-in"
          className="w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-yellow-500 p-1"
        >
          <img src="/foto.png" alt="photo" className="rounded-full" />
        </div>
        <div
          data-aos="zoom-in"
          className="h-[70px] w-fit bg-gray-800 flex justify-center items-center flex-col px-5 py-2 rounded-3xl"
        >
          <p className="font-bold text-4xl text-yellow-500">5+</p>
          <p className="text-white">Years Experience</p>
        </div>
      </div>
      <div data-aos="zoom-in" className="mt-10 bg-gray-800 p-8 rounded-3xl">
        <p className="text-white" data-aos="zoom-in">
          I'm a Full-Stack JavaScript Developer passionate about creating
          efficient and scalable web applications. With expertise in both
          frontend and backend technologies, I take a holistic approach to
          development—crafting seamless user experiences while building robust
          backend systems. My goal is to deliver solutions that are not only
          highly functional but also visually appealing.
        </p>
      </div>
    </div>
  );
}
