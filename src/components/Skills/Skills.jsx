import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiDaisyui, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-[#6b574e] pt-4 lg:pt-24">
      <div className="lg:w-3/5 lg:mx-auto mx-8 text-white">
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
              <li className="bg-white rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <FaHtml5 className="text-2xl lg:text-3xl text-orange-600" />
                HTML
              </li>
              <li className="bg-white rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <FaCss3Alt className="text-2xl lg:text-3xl text-blue-600" />
                CSS
              </li>
              <li className="bg-white rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <SiTailwindcss className="text-2xl lg:text-3xl text-sky-400" />
                Tailwind
              </li>
              <li className="bg-white rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <SiDaisyui className="text-2xl lg:text-3xl" />
                Daisyui
              </li>
              <li className="bg-white rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <FaReact className="text-2xl lg:text-3xl text-sky-600" />
                React
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mt-8 mb-4">Database</h2>
            <ul className="grid grid-cols-3 gap-6 text-black">
              <li className="bg-white rounded-md px-3 py-2 lg:px-10 lg:py-4 flex gap-4 items-center lg:text-lg">
                <SiMongodb className="text-2xl lg:text-3xl text-green-600" />
                MongoDB
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mt-8 mb-4">Backend</h2>
            <ul className="grid grid-cols-3 gap-6">
              {["ExpressJS"].map((e, i) => (
                <li
                  key={i}
                  className="border-2 border-[#2C3E50] rounded-md px-10 py-4 "
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mt-8 mb-4">Framework</h2>
            <ul className="grid grid-cols-3 gap-6">
              {["Next.js"].map((e, i) => (
                <li
                  key={i}
                  className="border-2 border-[#2C3E50] rounded-md px-10 py-4 "
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mt-8 mb-4">
              Programming Languages
            </h2>
            <ul className="grid grid-cols-3 gap-6">
              {["JavaScript", "C", "Python"].map((e, i) => (
                <li
                  key={i}
                  className="border-2 border-[#2C3E50] rounded-md px-10 py-4 "
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
