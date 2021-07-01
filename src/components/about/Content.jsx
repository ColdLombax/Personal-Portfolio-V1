import React from 'react';
import PropTypes from 'prop-types';

import firstSteps from '../../assets/illustrations/first-steps.svg';
import react from '../../assets/illustrations/react.svg';
import facts from '../../assets/illustrations/facts.svg';

function Content({ subHeader, description }) {
  return (
    <>
      <p className="text-xs text-gray-300">{subHeader}</p>
      <h1 className="font-bold w-8/12 text-xl pb-5">
        Hello World,
        <br />
        I&apos;m
        {' '}
        <span className="text-green-light">John Phillips</span>
      </h1>
      {/* Render Content */}

      {subHeader === 'Beginnings' && (
      <section>
        <p className="text-sm w-8/12">
          {description}
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
        <img src={firstSteps} alt="" className="absolute bottom-0 right-5 w-5/12 z-10" />
      </section>
      )}

      {/* Render Content */}
      {subHeader === 'My Stack' && (
      <section>
        <p className="text-sm w-7/12">
          I
          {' '}
          <span className="text-green-light">primarly use react</span>
          {' '}
          for most of my projects, however; I’m always interested in
          {' '}
          <span className="text-green-light">learning new technology.</span>
        </p>
        <img src={react} alt="" className="absolute -bottom-2 right-3 w-5/12 z-10" />
      </section>
      )}

      {/* Render Content */}
      {subHeader === 'Facts' && (
      <section>
        <p className="text-sm w-7/12">
          <h2 className="text-green-light pb-2">Things I Love</h2>
          <ul className="list-disc ml-6">
            <li>Self Development</li>
            <li>Ice-cream</li>
            <li>Gaming</li>
            <li>UI/UX Design</li>
            <li className="text-green-light">Programming</li>
          </ul>
        </p>
        <img src={facts} alt="" className="absolute -bottom-5 right-8 w-5/12 z-10" />
      </section>
      )}
    </>
  );
}

Content.propTypes = {
  subHeader: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Content;
