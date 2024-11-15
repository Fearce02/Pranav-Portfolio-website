import { EXPERIENCES } from "../data/index";
import { motion } from "framer-motion";

function Experiences() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl font-bold"
        >
          Work Experience
        </motion.h2>
        <div>
          {EXPERIENCES.map((exprience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              {" "}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-md font-bold text-neutral-400">
                  {exprience.year}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {exprience.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {" "}
                    {exprience.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">{exprience.description}</p>
                {exprience.platforms_and_tools.map((tool, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tool}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experiences;