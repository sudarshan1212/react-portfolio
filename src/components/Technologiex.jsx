import { DiJavascript1 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { LiaPython } from "react-icons/lia";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
const inconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [12, -12],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologiex = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 2 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={inconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 lg:hover:scale-[1.04] duration-100 "
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={inconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 lg:hover:scale-[1.04] duration-100"
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={inconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 lg:hover:scale-[1.04] duration-100 "
        >
          <SiExpress className="text-7xl text-neutral-400" />
        </motion.div>
        <motion.div
          variants={inconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 lg:hover:scale-[1.04] duration-100 "
        >
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={inconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 lg:hover:scale-[1.04] duration-100  "
        >
          <DiJavascript1 className="text-7xl text-yellow-400 " />
        </motion.div>
        <motion.div
          variants={inconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 lg:hover:scale-[1.04] duration-100  "
        >
          <RiTailwindCssFill className="text-7xl text-[#0EA5E9]" />
        </motion.div>
        <motion.div
          variants={inconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 lg:hover:scale-[1.04] duration-100 "
        >
          <LiaPython className="text-7xl text-[#366C9C]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologiex;
