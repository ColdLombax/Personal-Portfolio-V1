import React from 'react';
import Footer from '../Footer/Footer';

import lostOnline from '../../assets/illustrations/lost-online.svg';
import container from '../../assets/illustrations/curve-container.svg';

function About() {
  return (
    <div>
      <div className="h-screen w-full flex flex-col relative">
        <img
          src={lostOnline}
          alt=""
          className="w-5/6 absolute right-0 top-16
          md:w-6/12
          lg:w-5/12
          xl:w-4/12"
        />
        <img
          src={container}
          alt=""
          className="absolute  bottom-0 left-0 w-5/6
          md:w-4/6
          lg:w-4/6
          xl:w-3/6"
        />
      </div>
      <Footer />
    </div>

  );
}

export default About;
