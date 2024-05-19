import { motion } from "framer-motion";
import profile from "../assets/Designer (1).jpeg";

// import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 2 }}
        className="my-8 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 lg:p-9 "
        >
          <div className="flex items-center justify-center">
            <img
              src={profile}
              alt="about"
              className="w-5/6 h-5/6 rounded-lg  shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
            />
          </div>
        </motion.div>
        <motion.div
          
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start flex-col">
            {/* <p className="my-2 max-w-xl py-6 ">{EDUCATION}</p> */}

            <p className="my-2 max-w-xl py-6 leading-8 text-lg ">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
