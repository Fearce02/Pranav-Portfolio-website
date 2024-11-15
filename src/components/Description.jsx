import { DESCRIPTION } from "../data/index";
import { motion } from "framer-motion";
import AboutPic from "../assets/ProfilePics/AboutPic.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Description() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-bold tracking-tight lg:mt-16 lg:text-8xl "
              >
                Pranav Kumbhar
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r font-bold from-pink-600 via-slate-100 to-purple-600 bg-clip-text text-3xl lg:text-5xl tracking-tight text-transparent"
              >
                {" "}
                Full Stack Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-normal tracking-tighter text-xl "
              >
                {DESCRIPTION}
              </motion.p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full lg:w-1/3 lg:p-8"
          >
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={AboutPic}
                alt="Profile Pic"
                className="rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Description;
