import { Component } from "solid-js";
import Nav from "../components/nav";


const NotFound : Component = () => {
  return (
    <div class="dark:bg-default dark:text-default-light bg-ldefault text-ldefault-light">
      <div class="grid grid-rows-[auto,1fr,auto] w-full max-w-screen-xl mx-auto min-h-fill-screen">
        <Nav />
        <main class="w-full p-8 flex flex-col justify-center items-center gap-4">

          <h1 class="text-9xl font-bold">404</h1>
          <h2 class="text-2xl">Oh No</h2>
          <p>We couldn't find the page you were looking for.</p>
          
        </main>

        <footer class="w-full p-8">
          <p class="text-center">Made with <span class="text-red-500">❤</span> and <span class="text-stone-500">☕️</span> by Dane Walker</p>
        </footer>
      </div>
    </div>
  );
}

export default NotFound;