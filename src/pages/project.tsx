import { Motion, Presence } from "@motionone/solid";
import { useNavigate, useParams } from "@solidjs/router";
import { Component, createEffect, createSignal } from "solid-js";
import Nav from "../components/nav";
import Spinner from "../components/spinner";
import ArrowIcon from "../icons/arrow";
import GetColor from "../utils/colors/colors";

interface IProject {
  name: string;
  description: string;
  languages: string[];
  imageUrl: string;
  htmlUrl: string;
  stargazersCount: number;
  watchersCount: number;
}

const Project : Component = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [project, setProject] = createSignal<IProject>();

  const getProject = () => {
    fetch('https://api.danecwalker.com/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            repo(name: "${params.name}") {
              name
              description
              languages
              imageUrl
              htmlUrl
              stargazersCount
              watchersCount
            }
          }
        `
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.data?.repo) {
          setProject(data.data.repo as IProject);
        } else {
          navigate("/404", { replace: true });
        }
      });
  }

  createEffect(() => {
    getProject();
  })


  return (
    <div class="dark:bg-default dark:text-default-light bg-ldefault text-ldefault-light">
      <div class="grid grid-rows-[auto,1fr,auto] w-full max-w-screen-xl mx-auto min-h-fill-screen">
        <Nav />

        <main class="relative w-full p-8 flex flex-col justify-center items-center gap-2">
          
          <Motion.div 
            initial={{opacity: 0, transform: "translateY(50px)" }}
            animate={{opacity: 1, transform: "translateY(0)"}}
            class="flex flex-col justify-center items-center gap-2">
            <h1 class="text-4xl font-bold text-center mt-8">{project()?.name ?? ""}</h1>
            <h2 class="text-2xl mb-4 max-w-5xl text-center">{project()?.description ?? ""}</h2>
            <div class="flex flex-wrap justify-center w-full gap-4 mb-8">
              {
                project()?.languages.map((language, i) => (
                  <Motion.div 
                    transition={{delay: 0.1*i}}
                    initial={{opacity: 0, transform: "translateX(50px)" }}
                    animate={{opacity: 1, transform: "translateX(0)" }}
                    class={`py-2 px-4 rounded-full text-center`} style={`background-color: ${GetColor(language)}44; color: ${GetColor(language)}ff; border: 1px solid ${GetColor(language)}ff;`}>{language}</Motion.div>
                ))
              }
            </div>
          </Motion.div>

          <Motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            class="flex justify-center items-center gap-8">
            <p class="flex justify-center items-center gap-1 text-lg">✨ {project()?.stargazersCount}</p>
            <p class="flex justify-center items-center gap-1 text-lg">👀 {project()?.stargazersCount}</p>
          </Motion.div>
          <Motion.a 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            href={project()?.htmlUrl} target="_blank" class="underline flex justify-center items-center gap-2 hover:scale-105 transition-transform mb-16"><div class="w-4 h-4"><ArrowIcon/></div> View on Github</Motion.a>

          <Presence>
            
            {
              project()?.imageUrl !== "" && (
                <Motion.img 
                  transition={{delay: 0.2}}
                  initial={{opacity: 0, transform: "translateY(50px)" }}
                  animate={{opacity: 1, transform: "translateY(0)" }}
                  loading="lazy" src={project()?.imageUrl} class="w-full max-w-screen-xl" />
              )
            }
          </Presence>
        </main>

        <footer class="w-full p-8">
          <p class="text-center">Made with <span class="text-red-500">❤</span> and <span class="text-stone-500">☕️</span> by Dane Walker</p>
        </footer>
      </div>
    </div>
  );
}

export default Project;