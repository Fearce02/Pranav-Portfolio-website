import { FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "../assets/Logos/Logo.png";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
      <div>
        <nav className=" mb-20 flex items-center justify-between py-6">
          <motion.div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={Logo} alt="Pranav'sLogo" />
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1uIKPEn-C37jxTDfFXp1zCDo3zB7L1PxQ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              download="Pranav's_Resume.pdf"
              className=" ml-3 text-sm w-24 h-12 flex items-center justify-center bg-opacity-30 hover:bg-purple-700 font-bold rounded-2xl bg-purple-400 transition-colors duration-200  text-white"
            >
              Resume
            </motion.a>
          </motion.div>
          <div className="m-8 flex items-center justify-center gap-4 ">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://www.linkedin.com/in/pranavkumbhar02/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-4xl" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://github.com/Fearce02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub href="" className="text-4xl" />
              </a>
            </motion.div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
