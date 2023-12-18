import Image from "next/image";
import profilePic from "@/assets/bannerPic.png";
import profilePicM from "@/assets/bannerMobilePic.png";
import { Caveat } from "next/font/google";

const rosarivo = Caveat({ subsets: ["latin"] });

const Header = () => {
  return (
    <>
      <div className="bg-[#303736] text-[#ECF0F1]">
        {/* desktop */}
        <div className="hidden w-3/5 mx-auto lg:flex justify-between py-32 h-screen items-center">
          <div className="flex items-center">
            <div>
              <p className="text-3xl font-semibold">Hi, I am</p>
              <div className="mt-5 mb-3">
                <h2>
                  <span className="text-7xl font-bold">Shishir Halder</span>
                </h2>
              </div>
              <p className="text-xl font-light max-w-[34vw] leading-relaxed text-justify">
                I currently specialize in frontend web development, with a keen
                aspiration to elevate my skill set and transition into the
                esteemed realm of full-stack web development.
              </p>
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
      <div className="lg:hidden m-6 h-[100svh]">
        <div className="bg-[#2C3E50] text-[#ECF0F1] py-24 px-6 rounded-xl">
          <div className="flex justify-end mx-3 my-3">
            <div className="avatar">
              <div className="w-44 rounded-full ring ring-[#ECF0F1] ring-offset-[#2C3E50] ring-offset-8">
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
            <p className="text-4xl font-light mt-8">I'm</p>
            <h2 className="text-4xl mt-6">Shishir Halder</h2>
          </div>
        </div>
        <div className="font-light px-1 pt-10 leading-loose">
          I currently specialize in frontend web development, with a keen
          aspiration to elevate my skill set and transition into the esteemed
          realm of full-stack web development.
        </div>
      </div>
    </>
  );
};

export default Header;
