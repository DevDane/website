import { Component } from "solid-js";
import GetColor from "../utils/colors/colors";

interface IProjectCard {
  name: string;
  description: string;
  languages: string[];
}

const ProjectCard : Component<IProjectCard> = (props) => {
  return (
    <div class="w-full h-full border border-ldefault-border dark:border-default-border rounded-3xl p-4 hover:bg-ldefault-border dark:hover:bg-default-border cursor-pointer transition-colors flex flex-col">
      <h1 class="text-lg font-bold mb-2">{props.name}</h1>
      <p>{props.description}</p>
      <div class="inline-block min-h-[2rem] h-full"></div>
      <div class="flex gap-4 w-full">
        {
          props.languages.map((language) => (
            <span class={`h-fit text-sm py-2 px-4 rounded-full`} style={`background-color: ${GetColor(language)}44; color: ${GetColor(language)}ff; border: 1px solid ${GetColor(language)}ff;`}>{language}</span>
          ))
        }
      </div>
    </div>
  );
}

export default ProjectCard;