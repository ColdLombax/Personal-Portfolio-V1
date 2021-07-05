import React from 'react';
import Footer from '../Footer/Footer';

import lostOnline from '../../assets/illustrations/lost-online.svg';
import steps from '../../assets/illustrations/first-steps.svg';

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
        <div
          className="absolute left-0 bg-desktop-container w-5/6 h-64 bg-contain bg-no-repeat bottom-0 z-10
          md:h-3/6
          lg:h-4/6
          xl:h-5/6"
        >
          <div
            className="font-bold text-white pt-9 pl-5
            md:pt-20 md:pl-10
            lg:pt-28
            xl:pt-60"
          >
            <p
              className="font-light text-xs
              md:text-sm
              lg:hidden"
            >
              BEGININGS
            </p>
            <h1
              className="text-2xl w-4/6 mb-2.5
              md:text-4xl md:mb-10
              xl:text-7xl"
            >
              Hello World,
              {' '}
              <br />
              I’m
              <span className="text-green-light"> John Phillips</span>
            </h1>
            <p
              className="text-sm w-7/12 font-light
              md:text-xl
              lg:w-6/12 lg:text-2xl
              xl:text-3xl"
            >
              I&apos;m a
              {' '}
              <span className="text-green-light">self-taught/learning front-end developer</span>
              , I had taken my first
              steps on
              {' '}
              <span className="text-green-light">8th August 2020</span>
              , and have enjoyed it ever since.
            </p>
            <img
              src={steps}
              alt=""
              className="absolute bottom-0 right-8 w-2/6
              md:w-5/12 md:right-24
              lg:w-4/12 lg:right-60
              xl:w-2/12 xl:left-96"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default About;
