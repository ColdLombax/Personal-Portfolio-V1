import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import './App.css';

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
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">PROJECTS</NavLink>
            </li>
            <li>
              <NavLink to="/experience">EXPERIENCE</NavLink>
            </li>
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
