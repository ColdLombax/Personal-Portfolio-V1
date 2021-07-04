/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import waiting from '../../assets/illustrations/waiting.svg';

function Experience() {
  return (
    <div
      className="w-full h-screen flex flex-col
    lg:flex-row"
    >
      <div className="bg-purple-light w-full grid place-items-center">
        <img src={waiting} alt="" className="mt-20 mr-20" />
      </div>
      <div className="lg:w-3/6">
        <div
          className="font-bold text-center ml:0 lg:block flex flex-col items-center
        lg:w-full lg:mt-24 mt-10 lg:pl-8 lg:text-left"
        >
          <h3 className="text-3xl">Experience?</h3>
          <hr className="border-4 border-blue-dark mt-5 mb-5 w-3/4 lg:w-2/4" />
          <p
            className=" text-lg lg:pr-24 text-black-light
          xl:text-xl lg:p-0 p-5"
          >
            I currently have
            {' '}
            <span className="text-blue-dark">no ‘commercial’ experience.</span>
            <br />
            <br />
            I’m always
            {' '}
            <span className="text-blue-dark">open to learning new tools</span>
            , so if I do not fit your role, I’d love to find out what you’re looking for.
            <br />
            <br />
            <span className="text-blue-dark">Checkout my GitHub page</span>
            {' '}
            for more information about my experiences.
          </p>
          <button
            className="font-bold text-xl w-3/4 p-3 mt-5 border-4 mb-5 border-blue-light text-black-light hover:bg-blue-light
          lg:w-1/4"
            type="button"
          >
            GITHUB
          </button>
        </div>
        <div
          className="font-bold text-center lg:block flex flex-col items-center
        lg:w-full lg:mt-5 mt-10 lg:pl-8 lg:text-left"
        >
          <h3 className="text-3xl lg:mt-14">Start my Career?</h3>
          <hr className="border-4 border-blue-dark mt-5 mb-5 w-3/4 lg:w-2/4" />
          <p
            className=" text-lg text-black-light
          xl:text-xl lg:p-0 p-5 lg:pr-24"
          >
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
          <p>
            <ul className="text-sm mt-10">
              <li>
                <a href="#">
                  <span className="text-blue-dark">EMAIL: </span>
                  coldlombax@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="text-blue-dark">PHONE: </span>
                  +447487 211144
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="text-blue-dark">LINKEDIN: </span>
                  https://www.linkedin.com...
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;

/*

  Reoganize code so that large has it's own section.
  Develop second section in seperate component?
  Seperate code so that Experience isn't so cluttered

*/
