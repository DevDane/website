import { Motion } from "@motionone/solid";
import { Component } from "solid-js";

const Spinner : Component = () => {
  return (
    <Motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      class="flex justify-center items-center">
        <div class="relative w-16 h-16">
          <Motion.div 
            animate={{ scale: [0.2, 1, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, easing: 'linear' }}
            class="w-full h-full absolute top-0 left-0 border-2 border-default-light rounded-full dark:lborder-default-light"/>

          <Motion.div 
            animate={{ scale: [0.2, 1, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, easing: 'linear', delay: 0.5 }}
            class="w-full h-full absolute top-0 left-0 border-2 border-default-light rounded-full dark:lborder-default-light"/>
        </div>
    </Motion.div>
  );
}

export default Spinner;