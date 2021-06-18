import React from 'react';
import { node, string } from 'prop-types';

function Card({ children, bg, classes }) {
  return (
    <div
      className={`card w-full px-4 py-4 ${
        bg === 'dark' ? 'bg-container-darker' : ''
      } ${bg === 'white' ? 'bg-white' : ''} ${classes}`}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: node,
  bg: string,
  classes: string,
};

Card.defaultProps = {
  bg: '',
  classes: '',
};

export default Card;
