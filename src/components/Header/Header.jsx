import Image from "next/image";
import profilePic from "@/assets/bannerPic.png";
import profilePicM from "@/assets/bannerMobilePic.png";

const Header = () => {
  return (
    <>
      <div className="bg-[#2C3E50] text-[#ECF0F1]">
        {/* desktop */}
        <div className="hidden w-3/5 mx-auto lg:flex justify-between py-32">
          <div className="flex items-center">
            <div className="">
              <p className="text-3xl">Hi, I am</p>
              <h2 className="text-6xl font-semibold mt-5 mb-3">
                Shishir Halder
              </h2>
              <p className="text-xl font-light max-w-[33vw] text-justify">
                I currently specialize in frontend development, with a keen
                aspiration to elevate my skill set and transition into the
                esteemed realm of full-stack development.
              </p>
            </div>
          </div>
          <div className="avatar">
            <div className="w-80 rounded-full">
              <Image src={profilePic} height={500} width={500}></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="bg-[#2C3E50] text-[#ECF0F1] pt-16 pb-6 px-10">
          <div className="flex justify-end mx-3 my-3">
            <div className="avatar">
              <div className="w-60 rounded-full ring ring-[#ECF0F1] ring-offset-[#2C3E50] ring-offset-8">
                <Image src={profilePicM} height={300} width={300}></Image>
              </div>
            </div>
          </div>
          <div>
            <p className="text-4xl font-light">I'm</p>
            <h2 className="text-5xl mt-8">Shishir Halder</h2>
          </div>
        </div>
        <div className="font-light italic px-10 pt-6">
          I currently specialize in frontend development, with a keen aspiration
          to elevate my skill set and transition into the esteemed realm of
          full-stack development.
        </div>
      </div>
    </>
  );
};

export default Header;
