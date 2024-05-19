import { FaSquareTwitter } from "react-icons/fa6";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [quoto, setQuoto] = useState(
    "Success is not final; failure is not fatal: It is the courage to continue that counts."
  );

  const inconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      opacity: [0, 1],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  useEffect(() => {
    try {
      fetch("https://type.fit/api/quotes")
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(function (data) {
          setInterval(() => {
            const randomNumber = Math.floor(Math.random() * 16);

            const today = data[randomNumber].text;
            setQuoto(today);
          }, 4000);
        });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }, []);

  return (
    <nav className="   mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0  flex-col">
        {/* <img className="mx-2 w-10" src={logo} alt="" /> */}

        <motion.h3
          variants={inconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 lg:hover:scale-[1.04] duration-100 "
        >
          {quoto}
        </motion.h3>
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <Link to="https://github.com/sudarshan1212">
          <FaGithub />
        </Link>
        <Link to="https://linkedin.com/in/sudarshansam12">
          <FaLinkedin />
        </Link>
        <FaInstagram />

        <Link to="https://x.com/home">
          <FaSquareTwitter />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
