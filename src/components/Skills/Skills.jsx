import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiDaisyui,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";
import pyLogo from "@/assets/python.png";
import cLogo from "@/assets/c.svg";

const Skills = () => {
  return (
    <div className="bg-[#6b574e] mx-6 lg:mx-0 rounded-xl py-10 lg:py-40">
      <div className="lg:w-3/5 lg:mx-auto mx-6 text-white">
        <h2 className="text-2xl lg:text-3xl font-bold">
          <span className="hidden lg:inline-block">
            MY PROFICIENCY ENCOMPASSES THE FOLLOWING SKILLS
          </span>
          <span className="lg:hidden">My skills</span>
        </h2>
        <div>
          <div>
            <h2 className="text-lg lg:text-xl font-medium mt-4 lg:mt-8 mb-4">
              Frontend Development
            </h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-black">
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <FaHtml5 className="text-2xl lg:text-3xl text-orange-600" />
                HTML
              </li>
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <FaCss3Alt className="text-2xl lg:text-3xl text-blue-600" />
                CSS
              </li>
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <SiTailwindcss className="text-2xl lg:text-3xl text-sky-400" />
                Tailwind
              </li>
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <SiDaisyui className="text-2xl lg:text-3xl" />
                Daisyui
              </li>
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <FaReact className="text-2xl lg:text-3xl text-sky-600" />
                React
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-medium mt-4 lg:mt-8 mb-4">
              Database
            </h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-black">
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <SiMongodb className="text-2xl lg:text-3xl text-green-600" />
                MongoDB
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-medium mt-4 lg:mt-8 mb-4">
              Backend
            </h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-black">
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <SiExpress className="text-2xl lg:text-3xl" />
                Express
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-medium mt-4 lg:mt-8 mb-4">
              React Framework
            </h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-black">
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <TbBrandNextjs className="text-2xl lg:text-3xl" />
                Nextjs
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-medium mt-4 lg:mt-8 mb-4">
              Programming Languages
            </h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-black">
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <SiJavascript className="text-2xl lg:text-3xl text-yellow-400" />
                JavaSript
              </li>
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <Image
                  src={pyLogo}
                  alt="pythonLogo"
                  height={32}
                  width={32}
                  className="h-5 w-5 lg:h-7 lg:w-7"
                />
                <span>Python</span>
              </li>
              <li className="bg-slate-200 rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <Image
                  src={cLogo}
                  alt="cLogo"
                  height={32}
                  width={32}
                  className="h-6 w-6 lg:h-7 lg:w-7"
                />
                <span>C</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
