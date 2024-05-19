import project1 from "../assets/projects/saas.png";
import project2 from "../assets/projects/ecommerce.png";
import project3 from "../assets/projects/travel.png";
import project4 from "../assets/projects/doctor.png";

export const HERO_CONTENT = `Enthusiastic and detail-oriented MERN stack developer with a strong foundation in building dynamic and responsive web applications. Proficient in MongoDB, Express.js, React, and Node.js, with a solid understanding of both front-end and back-end development. Eager to leverage my skills in a collaborative environment to develop efficient and scalable web solutions.`;

export const ABOUT_TEXT = `Recent college graduate with a degree in Computer Science and a passion for web development, specializing in the MERN stack. I excel in creating dynamic and responsive web applications using React, Node.js, Express.js, and MongoDB, enabling efficient and scalable solutions. Proficient in modern development tools such as Git, VSCode, and Postman, I thrive in collaborative environments. With a strong foundation in JavaScript, HTML, and CSS, I am committed to continuous learning and staying updated with industry trends to deliver high-quality code. Ready to leverage my skills and knowledge to contribute effectively to a dynamic development team.`;

export const PROJECTS = [
  {
    title: "SAAS PRODUCT WEBSITE",
    link: "https://saas-threejs.netlify.app/",
    image: project1,
    description:
      "Developed a SaaS productwebsitewithThree.js taughtme advancedweb graphics, interactive design, and enhanced user engagement techniques.",
    technologies: ["React", "TailwindCSS", "ThreeJS"],
  },
  {
    title: "E-Commerce Website",
    image: project2,
    link: "https://ecommer-react-12.netlify.app/",

    description:
      " Developed eCommerce site using React, Firebase for authentication and data storage, Stripe for payments, Redux for state management, ensuring scalability I learned frontend development, database integration, authentication, and responsive design.",
    technologies: ["React", "redux", "Firebase", "Tailwind CSS"],
  },
  {
    title: "MERN STACK DOCTOR APPOINTMENT BOOKING WEBSITE",
    image: project4,
    link: "https://doctor-booking-app-sudarshan.netlify.app/",

    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["ReactJs", "Node Js", "MongoDB", "Stripe", "TailwindCSS"],
  },
  {
    title: "TRAVEL WEBSITE ",
    image: project3,
    link: "https://travel-sudarshan.netlify.app/",

    description:
      "Created a responsive travel website using React, Redux, and Tailwind CSS involves several steps, including setting up the project, building components, managing state with Redux, and applying responsive design principles using Tailwind CSS.",
    technologies: ["React", "redux", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Chennai, Tamil Nadu, India",
  // phoneNo: "+91 6369414514 ",
  email: "sudarshansam12@gmail.com",
};
