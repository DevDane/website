import { Component } from "solid-js";
import GithubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";
import resume from "../files/Dane Walker - Resume.pdf";

const Nav : Component = () => {
  return (
    <header class="w-full">
      <nav class="w-full">
        <ul class="grid md:grid-cols-12 grid-cols-6 justify-between items-center text-center">
          <li class="px-4 py-8 self-center justify-self-center md:text-base text-sm">
            <a href="/projects" class="hover:underline">Projects</a>
          </li>
          <li class="px-4 py-8 self-center justify-self-center md:col-span-2 md:text-base text-sm">
            <a href={resume} download="Dane Walker - Resume" class="hover:underline">Resume</a>
          </li>
          <li class="px-4 py-8 self-center justify-self-center text-center font-bold text-2xl md:col-span-6 col-span-2">
            <a href="/">DevDane</a>
          </li>
          <li class="px-4 py-8 self-center justify-self-center md:col-start-11">
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
    </header>
  );
}

export default Nav;