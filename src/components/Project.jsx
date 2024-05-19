import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 2 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="">
        {PROJECTS.map((project, index) => (
          <Link key={index} to={project.link}>
            <div className="mb-8 flex flex-wrap lg:justify-center lg:hover:scale-[1.03]  transform duration-200">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4 flex items-center justify-center rounded-lg"
              >
                <img
                  className="rounded-lg h-32 w-60"
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-ull max-w-xl lg:w-3/4 text-center lg:text-start"
              >
                <h6 className="mb-2 font-semibold  mt-5 lg:mt-1">
                  {project.title}
                </h6>
                <p className="mb-4  text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900  px-2 py-1 text-base font-semibold  bg-gradient-to-r from-purple-400  to-pink-400 bg-clip-text text-transparent"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
