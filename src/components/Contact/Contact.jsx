import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-secondary lg:bg-accent text-white py-10">
      <div className="w-4/5 lg:w-3/5 mx-auto">
        <h2 className="text-3xl">Contact me</h2>
        <div>
          <div className="flex flex-col lg:flex-row lg:gap-2 mt-6">
            <h3 className="flex gap-2 items-center text-xl">
              <MdEmail /> Email :
            </h3>
            <p className="text-lg">shishirhalder2001@gmail.com</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-2 mt-6">
            <h3 className="flex gap-2 items-center text-xl">
              <AiOutlineLinkedin /> LinkedIn :
            </h3>
            <a
              href="https://www.linkedin.com/in/shishir-halder-2684552a4/"
              className="text-lg"
            >
              shishir-halder-2684552a4
            </a>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-2 mt-6">
            <h3 className="flex gap-2 items-center text-xl">
              <FaPhoneAlt /> Phone :
            </h3>
            <p className="text-lg">+8809696378558</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
