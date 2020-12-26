import React from 'react';
import { node, string } from 'prop-types';

function Card({ children, bg, classes }) {
  return (
    <div
      className={`card w-full ${
        bg === 'dark' ? 'bg-container-darker' : ''
      } ${classes}`}
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
