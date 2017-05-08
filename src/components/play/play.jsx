import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Play = ({ play, id, paused, children, ...attributes }) => (
  <button className={classes.PLAY} onClick={() => play(id, paused)} {...attributes}>
    {children}
  </button>
);

Play.propTypes = {
  children: PropTypes.node.isRequired,
  play: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  paused: PropTypes.bool.isRequired,
};

export default Play;
