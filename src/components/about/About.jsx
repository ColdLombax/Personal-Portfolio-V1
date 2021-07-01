import React, { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function About() {
  const [content, setContent] = useState(1);
  return (
    <div className="h-screen w-full absolute">
      <Header />
      <Main content={content} />
      <Footer setContent={setContent} />
    </div>
  );
}

export default About;

// Attempt to get the screen size working correctly so you can bottom left a curved image.
