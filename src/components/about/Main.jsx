import React from 'react';
import PropTypes from 'prop-types';

import Content from './Content';

function Main({ content }) {
  let contentValue;
  switch (content) {
    case 1:
      contentValue = 'Beginnings';
      break;
    case 2:
      contentValue = 'My Stack';
      break;
    case 3:
      contentValue = 'Facts';
      break;
    default:
      break;
  }
  return (
    <div
      className="
    absolute w-10/12 h-72 bottom-0 left-0 bg-purple-dark rounded-tr-full pt-14 pl-5 text-white
    md:w-8/12
    lg:h-4/6 lg:w-8/12
    xl:h-5/6 xl:w-6/12"
    >
      <Content subHeader={contentValue} />
    </div>
  );
}

Main.propTypes = {
  content: PropTypes.number.isRequired,
};

export default Main;
