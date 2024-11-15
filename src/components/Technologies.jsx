import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
function Technologies() {
  return (
    <>
      <div className="border-b border-neutral-800 pb-24">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl font-bold"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2.4)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial="initial"
            animate="animate"
            className="rounded-3xl border-4 border-neutral-500 p-4"
          >
            <SiMongodb title="MongoDB" className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial="initial"
            animate="animate"
            className="rounded-3xl border-4 border-neutral-500 p-4"
          >
            <SiExpress title="ExpressJS" className="text-7xl text-slate-300" />
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial="initial"
            animate="animate"
            className="rounded-3xl border-4 border-neutral-500 p-4"
          >
            <RiReactjsLine title="ReactJS" className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial="initial"
            animate="animate"
            className="rounded-3xl border-4 border-neutral-500 p-4"
          >
            <FaNodeJs title="NodeJS" className="text-7xl text-green-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial="initial"
            animate="animate"
            className="rounded-3xl border-4 border-neutral-500 p-4"
          >
            <BiLogoPostgresql
              title="PostGreSQL"
              className="text-7xl text-sky-700"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Technologies;
