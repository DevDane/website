import { Motion, Presence } from "@motionone/solid";
import { Component, createEffect, createSignal } from "solid-js";
import Nav from "../components/nav";
import ProjectCard from "../components/projectCard";
import Spinner from "../components/spinner";

interface IProject {
  nodeID: string;
  name: string;
  description: string;
  languages: string[];
}

const Projects : Component = () => {
  const [projects, setProjects] = createSignal<IProject[]>([]);

  const getProjects = () => {
    fetch('https://api.danecwalker.com/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            repos {
              nodeID
              name
              description
              languages
            }
          }
        `
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.data.repos) {
          setProjects(data.data.repos as IProject[]);
        }
      });
  }

  createEffect(() => {
    getProjects();
  })


  return (
    <div class="dark:bg-default dark:text-default-light bg-ldefault text-ldefault-light">
      <div class="grid grid-rows-[auto,1fr,auto] w-full max-w-screen-xl mx-auto min-h-fill-screen">
        <Nav />
        <main class="w-full p-8">

          <Motion.h1
            initial={{opacity: 0, transform: "translateY(50px)" }} 
            inView={{opacity: 1, transform: "translateY(0)"}} 
            class="text-5xl font-bold text-center mt-8 mb-16">Projects</Motion.h1>

          <Presence exitBeforeEnter>
            {
              projects().length > 0 ? (
                <div class="grid md:grid-cols-2 auto-rows-fr gap-4">
                  {
                    projects().map((project, i) => (
                      <Motion.a
                        transition={{delay: 0.1*i}}
                        initial={{ opacity: 0, transform: "translateY(50px)" }}
                        animate={{ opacity: 1, transform: "translateY(0)" }}
                        href={`/projects/${project.name}`}>
                        <ProjectCard name={project.name} description={project.description} languages={project.languages} />
                      </Motion.a>
                    ))
                  }
                </div>
              ) :
              (
                <Spinner />
              )
            }
          </Presence>
        </main>

        <footer class="w-full p-8">
          <p class="text-center">Made with <span class="text-red-500">???</span> and <span class="text-stone-500">??????</span> by Dane Walker</p>
        </footer>
      </div>
    </div>
  );
}

export default Projects;