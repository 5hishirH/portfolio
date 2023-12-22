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
    <div className="bg-accent lg:bg-secondary py-10 lg:py-40">
      <div className="lg:w-3/5 lg:mx-auto mx-10 text-white">
        <h2 className="text-3xl font-bold">
          <span className="hidden lg:inline-block">
            MY PROFICIENCY ENCOMPASSES THE FOLLOWING SKILLS
          </span>
          <span className="lg:hidden">MY EXPERTISES</span>
        </h2>
        <div>
          <div>
            <h2 className="text-lg lg:text-xl font-medium mt-4 lg:mt-8 mb-4">
              Frontend Development
            </h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white">
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4 lg:text-lg">
                <div className="flex gap-4 items-center">
                  <FaHtml5 className="text-2xl lg:text-3xl text-orange-600" />
                  HTML 100%
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="100"
                  max="100"
                ></progress>
              </li>
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4 lg:text-lg">
                <div className="flex gap-4 items-center">
                  <FaCss3Alt className="text-2xl lg:text-3xl text-blue-600" />
                  CSS 90%
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="90"
                  max="100"
                ></progress>
              </li>
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4 lg:text-lg">
                <div className="flex gap-4 items-center">
                  <SiTailwindcss className="text-2xl lg:text-3xl text-sky-400" />
                  Tailwind 100%
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="100"
                  max="100"
                ></progress>
              </li>
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4 lg:text-lg">
                <div className="flex gap-4 items-center">
                  <SiDaisyui className="text-2xl lg:text-3xl" />
                  Daisyui 80%
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="80"
                  max="100"
                ></progress>
              </li>
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4 lg:text-lg">
                <div className="flex gap-4 items-center">
                  <FaReact className="text-2xl lg:text-3xl text-sky-600" />
                  React 65%
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="65"
                  max="100"
                ></progress>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-medium mt-4 lg:mt-8 mb-4">
              Database
            </h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white">
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4 lg:text-lg">
                <div className="flex gap-4 items-center">
                  <SiMongodb className="text-2xl lg:text-3xl text-green-600" />
                  MongoDB 40%
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="40"
                  max="100"
                ></progress>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-medium mt-4 lg:mt-8 mb-4">
              Backend
            </h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white">
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4 lg:text-lg">
                <div className="flex gap-4 items-center">
                  <SiExpress className="text-2xl lg:text-3xl" />
                  Express 35%
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="35"
                  max="100"
                ></progress>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-medium mt-4 lg:mt-8 mb-4">
              React Framework
            </h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white">
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4   lg:text-lg">
                <div className="flex gap-4 items-center">
                  <TbBrandNextjs className="text-2xl lg:text-3xl" />
                  Nextjs 70%
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="70"
                  max="100"
                ></progress>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-medium mt-4 lg:mt-8 mb-4">
              Programming Languages
            </h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white">
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4 lg:text-lg">
                <div className="flex gap-4 items-center">
                  <SiJavascript className="text-2xl lg:text-3xl text-yellow-400" />
                  JavaSript 85%
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="85"
                  max="100"
                ></progress>
              </li>
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4 lg:text-lg">
                <div className="flex gap-4 items-center">
                  <Image
                    src={pyLogo}
                    alt="pythonLogo"
                    height={32}
                    width={32}
                    className="h-5 w-5 lg:h-7 lg:w-7"
                  />
                  <span>Python 70%</span>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="70"
                  max="100"
                ></progress>
              </li>
              <li className="bg-secondary lg:bg-accent rounded-md px-4 py-3 lg:px-10 lg:py-4 lg:text-lg">
                <div className="flex gap-4 items-center">
                  <Image
                    src={cLogo}
                    alt="cLogo"
                    height={32}
                    width={32}
                    className="h-6 w-6 lg:h-7 lg:w-7"
                  />
                  <span>C 80%</span>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="80"
                  max="100"
                ></progress>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
