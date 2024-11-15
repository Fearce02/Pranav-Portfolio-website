import { CONTACT } from "../data/index";
import { motion } from "framer-motion";

function ContactInfo() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl font-bold "
        >
          {" "}
          Contact-Info{" "}
        </motion.h2>
        <div className="text-center tracking-tighter">
          <span className="text-2xl font-bold"> Pranav Kumbhar </span>
          <br />
          <span className="text-md font-light"> Full stack Developer </span>
          <br />
          <br />
          <a href="mailto:pranav.kumbhar02@gmail.com">
            <span className="ml-1 border-b"> {CONTACT.email}</span>
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/pranavkumbhar02/"
            className="border-b"
          >
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
