import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';

// Pages
import Home from './pages/home';
import NotFound from './pages/notFound';
import Project from './pages/project';
import Projects from './pages/projects';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:name" component={Project} />
      <Route path="*" component={NotFound} />
    </Routes>
  );
};

export default App;
