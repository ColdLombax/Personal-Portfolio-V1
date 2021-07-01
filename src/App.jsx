import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import NavItem from './components/navbar/NavItem';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';

function App() {
  return (
    <Router>
      <div>
        <nav className="text-white text-lg font-bold bg-purple-dark w-full p-5">
          <ul className="
            flex justify-evenly gap-4
            lg:justify-start lg:gap-40 lg:ml-5
            xl:gap:60 xl:text-2xl"
          >
            <NavItem title="about" />
            <NavItem title="projects" />
            <NavItem title="experience" />
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
