/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';

import waiting from '../../assets/illustrations/waiting.svg';

function Experience() {
  return (
    <div>
      <div className="bg-purple-light h-half-screen w-full flex flex-col items-center justify-end pb-5">
        <img src={waiting} alt="avatar waiting for work" className="w-8/12 mr-5" />
      </div>
      <div className="text-center p-10 font-bold text-black-light">
        <h3 className="text-2xl">Experience?</h3>
        <hr className="w-full border-4 border-blue-light mt-2.5 mb-2.5" />
        <p className="">
          I currently have
          {' '}
          <span className="text-blue-dark">no ‘commercial’ experience.</span>
          <br />
          <br />
          I&apos;m always
          {' '}
          <span className="text-blue-dark">open to learning new tools</span>
          , so if I do not fit your role,
          I’d love to find out what you’re looking for.
          <br />
          <br />
          <span className="text-blue-dark"> Checkout my GitHub page</span>
          {' '}
          for more information about my experiences.
        </p>
        <button className="mt-10 p-2 w-3/4 border-4 border-blue-light font-bold text-2xl hover:bg-blue-light">GITHUB</button>
      </div>
      <div className="text-center p-10 pt-0 font-bold text-black-light">
        <h3 className="text-2xl">Start my Career?</h3>
        <hr className="w-full border-4 border-blue-light mt-2.5 mb-2.5" />
        <p>
          I’m an
          {' '}
          <span className="text-blue-dark">aspiring developer with a passion for frontend development.</span>
          <br />
          <br />
          I’m
          {' '}
          <span className="text-blue-dark">open to work</span>
          {' '}
          and would love to join your team.
          <br />
          <br />
          I love being asked questions,
          {' '}
          <span className="text-blue-dark">feel free to contact me</span>
          {' '}
          via the contact details below...
        </p>
        <ul className="mt-16 text-sm">
          <li>
            <a href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3A%3Fto%3Dcoldlombax@gmail.com" target="_blank" rel="noreferrer">
              <span className="text-blue-dark">EMAIL: </span>
              coldlombax@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+447487 211144">
              <span className="text-blue-dark">PHONE: </span>
              +447487 211144
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/john-phillips-8895a020b/" target="_blank" rel="noreferrer">
              <span className="text-blue-dark">LINKEDIN: </span>
              https://www.linkedin.com...
            </a>

          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
