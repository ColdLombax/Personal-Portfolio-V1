import React from 'react';

import firstSteps from '../../assets/illustrations/first-steps.svg';

function Main() {
  return (
    <div
      className="
    absolute w-10/12 h-72 bottom-0 left-0 bg-purple-dark rounded-tr-full pt-14 pl-5 text-white
    md:w-8/12
    lg:h-4/6 lg:w-8/12
    xl:h-5/6 xl:w-6/12"
    >
      <p className="text-xs text-gray-300">Beginnings</p>
      <h1 className="font-bold w-8/12 text-xl pb-5">
        Hello World,
        <br />
        I&apos;m
        {' '}
        <span className="text-green-light">John Phillips</span>
      </h1>
      <section>
        <p className="text-sm w-8/12">
          I&apos;m a
          {' '}
          <span className="text-green-light">self-taught/learning</span>
          {' '}
          front-end developer
          , I had taken my first
          steps on
          {' '}
          <span className="text-green-light">8th August 2020</span>
          , and have enjoyed it ever since.
        </p>
      </section>
      <img src={firstSteps} alt="" className="absolute bottom-0 right-5 w-5/12 z-10" />
    </div>
  );
}

export default Main;
