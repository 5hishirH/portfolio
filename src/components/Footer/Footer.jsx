import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-secondary lg:bg-accent py-6">
      <div className="lg:w-3/5 lg:mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
        <h2 className="font-light text-white text-center">
          Copyright © 2023 - All right reserved
        </h2>
        <div className="mt-2 lg:mt-0 flex gap-2 justify-center text-2xl text-white">
          <a
            href="https://www.linkedin.com/in/shishir-halder-2684552a4/"
            target="_blank"
          >
            <AiOutlineLinkedin />
          </a>
          <a href="https://github.com/5hishirH" target="_blank">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/ShishirHalder/" target="_blank">
            <SiLeetcode />
          </a>
          <a href="https://www.hackerrank.com/profile/s_halder0108">
            <SiHackerrank />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
