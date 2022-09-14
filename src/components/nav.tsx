import { Component, createSignal } from "solid-js";
import GithubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";
import HamburgerIcon from "../icons/hamburger";
import resume from "../files/Dane Walker - Resume.pdf";
import { Motion, Presence } from "@motionone/solid";

const Nav : Component = () => {
  const [open, setOpen] = createSignal(false);
  return (
    <header class="w-full z-50 relative">
      <nav class="w-full">
        <ul class="grid md:grid-cols-[repeat(24,minmax(0,1fr))] grid-cols-12 justify-between items-center text-center">
          
          <li class="px-4 py-8 self-center justify-self-center col-span-1 cursor-pointer">
            <div onclick={() => setOpen(p => !p)} class="md:w-6 w-5 md:h-6 h-5">
              <HamburgerIcon open={open()} />
            </div>
          </li>
          <li class="px-4 py-8 self-center justify-self-center text-center font-bold text-2xl md:col-start-3 md:col-span-20 col-span-4">
            <a href="/">DevDane</a>
          </li>
          <li class="px-4 py-8 self-center justify-self-center md:col-start-[23] col-start-11">
            <a href="https://www.linkedin.com/in/danecwalker/" target="_blank">
              <div class="md:w-6 w-5 md:h-6 h-5">
                <LinkedinIcon />
              </div>
            </a>
          </li>
          <li class="px-4 py-8 self-center justify-self-center">
            <a href="https://github.com/danecwalker/" target="_blank">
              <div class="md:w-6 w-5 md:h-6 h-5">
                <GithubIcon />
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <Presence exitBeforeEnter>
        {open() && (
          <Motion.div 
            initial={{ opacity: 0, bottom: "10px" }}
            animate={{ opacity: 1, bottom: 0 }}
            exit={{ opacity: 0, bottom: "-10px" }}
          
            class="absolute bottom-0 translate-y-full w-full max-w-lg px-4">
            <ul class="px-4 bg-default-light/10 border border-default-border rounded-2xl w-full overflow-hidden backdrop-blur-md z-50 flex flex-col">
              <li class="py-2 first:pt-4 last:pb-4 border-b border-default-border last:border-0">
                <a href="/projects" class="hover:underline">Projects</a>
              </li>
              <li class="py-2 first:pt-4 last:pb-4">
                <a href={resume} download="Dane Walker - Resume" class="hover:underline">Resume</a>
              </li>
            </ul>
          </Motion.div>
        )}
      </Presence>
    </header>
  );
}

export default Nav;