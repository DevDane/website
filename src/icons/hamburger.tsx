import { Component, createSignal } from "solid-js";
import { Motion, Presence } from "@motionone/solid";

const HamburgerIcon : Component<{open: boolean}> = (props) => {
  return (
    <div class="relative w-full h-full max-h-full max-w-full hover:opacity-50 transition-opacity">
      <Motion.div 
        initial={{ 
          top: "20%",
          y: 0,
        }}
        animate={{ 
          rotate: props.open ? 45 : 0, 
          top: props.open ? "50%" : "20%",
          y: props.open ? "-50%" : 0
        }}
        class="absolute left-0 w-full h-[0.2rem] bg-default-light rounded-full" />
      <Motion.div 
        initial={{ 
          bottom: "20%",
          y: 0,
        }}
        animate={{ 
          rotate: props.open ? -45 : 0 ,
          bottom: props.open ? "50%" : "20%",
          y: props.open ? "50%" : 0
        }}
        class="absolute left-0 w-full h-[0.2rem] bg-default-light rounded-full" />
    </div>
  );
}

export default HamburgerIcon;