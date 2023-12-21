import Image from "next/image";
import profilePic from "@/assets/bannerPic.png";
import profilePicM from "@/assets/bannerMobilePic.png";
import { Caveat } from "next/font/google";
import Dbtn from "../DownloadBtn/Dbtn";

const rosarivo = Caveat({ subsets: ["latin"] });

const Header = () => {
  return (
    <>
      <div className="bg-secondary text-[#ECF0F1]">
        {/* desktop */}
        <div className="hidden w-3/5 mx-auto lg:flex justify-between py-32 h-screen items-center">
          <div className="flex items-center">
            <div>
              <p className="text-3xl font-semibold">Hi, I am</p>
              <div className="mt-5 mb-3">
                <h2>
                  <span className="text-6xl font-bold">Shishir Halder</span>
                </h2>
              </div>
              <p className="text-xl font-light max-w-[30vw] leading-relaxed text-justify">
                I currently specialize in frontend web development, with a keen
                aspiration to elevate my skill set and transition into the
                esteemed realm of full-stack web development.
              </p>
              <div className="mt-4"></div>
              <Dbtn />
            </div>
          </div>
          <div className="avatar">
            <div className="w-80 rounded-full">
              <Image
                src={profilePic}
                height={500}
                width={500}
                alt="Shishir"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden bg-accent min-h-[100svh]">
        <div className="bg-secondary text-[#ECF0F1] py-10 px-10">
          <div className="flex justify-end mx-3 my-3">
            <div className="avatar">
              <div className="w-44 rounded-full ring ring-[#ECF0F1] ring-offset-secondary ring-offset-8">
                <Image
                  src={profilePicM}
                  height={300}
                  width={300}
                  alt="Shishir"
                ></Image>
              </div>
            </div>
          </div>
          <div>
            <p className="text-3xl font-light mt-6">I'm</p>
            <h2 className="text-3xl mt-4">Shishir Halder</h2>
          </div>
        </div>
        <div className="text-white py-10 px-10">
          <div className="font-light px-1 leading-relaxed">
            I currently specialize in frontend web development, with a keen
            aspiration to elevate my skill set and transition into the esteemed
            realm of full-stack web development.
          </div>
          <div className="mt-6"></div>
          <Dbtn />
        </div>
      </div>
    </>
  );
};

export default Header;
