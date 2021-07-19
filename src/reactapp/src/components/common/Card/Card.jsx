import React from 'react';
import { node, oneOf, string } from 'prop-types';

function Card({ children, bg, classes }) {
  return (
    <div
      className={`card w-full px-4 py-4 relative ${
        bg === 'dark' ? 'bg-container' : ''
      } ${bg === 'darker' ? 'bg-container-darker' : ''} ${
        bg === 'white' ? 'bg-white' : ''
      } ${classes}`}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: node,
  classes: string,
  bg: oneOf(['dark', 'darker', 'white', '']),
};

Card.defaultProps = {
  bg: '',
  classes: '',
};

export default Card;
