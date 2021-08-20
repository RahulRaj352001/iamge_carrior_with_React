import { motion } from "framer-motion";
import React from "react";
import { Transition } from "vue";

export default function Home() {
  return (
    <section className="flex h-screen justify-center">
      <div className="w-10/12 m-auto">
        <motion.h1
          initial={{opacity:0 ,y:-400 }}
          animate={{ scale: 1.5 ,opacity:1,y:-50, transition:{duration:1.5}}}
          className="m-auto font-bold text-3xl text-center"
        >
          welcome Home
        </motion.h1>
      </div>
    </section>
  );
}
