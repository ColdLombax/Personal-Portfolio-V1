import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function About() {
  return (
    <div className="h-screen w-full absolute">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default About;

// Attempt to get the screen size working correctly so you can bottom left a curved image.
