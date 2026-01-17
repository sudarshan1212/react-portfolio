import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 2 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:aakashsugadev2403@gmail.com" className="border-b ">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Footer;
