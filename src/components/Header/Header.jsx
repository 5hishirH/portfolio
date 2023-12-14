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
            <div>
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
              <Image src={profilePic} height={500} width={500} alt="Shishir"></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden p-8">
        <div className="bg-[#2C3E50] text-[#ECF0F1] pt-8 pb-6 px-4 rounded-xl">
          <div className="flex justify-end mx-3 my-3">
            <div className="avatar">
              <div className="w-56 rounded-full ring ring-[#ECF0F1] ring-offset-[#2C3E50] ring-offset-8">
                <Image src={profilePicM} height={300} width={300} alt="Shishir"></Image>
              </div>
            </div>
          </div>
          <div>
            <p className="text-4xl font-light">I am</p>
            <h2 className="text-4xl mt-6">Shishir Halder</h2>
          </div>
        </div>
        <div className="font-light px-1 pt-6">
          I currently specialize in frontend web development, with a keen aspiration
          to elevate my skill set and transition into the esteemed realm of
          full-stack web development.
        </div>
      </div>
    </>
  );
};

export default Header;
