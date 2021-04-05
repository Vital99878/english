import React from 'react';
import PropTypes from 'prop-types';
import classes from './Keys.module.scss';

const Keys = ({ keys, number }) => (
  <div className={classes.keys}>
    <h2>{`Упражнение  №${number}. Ключи`}</h2>
    <p>{keys}</p>
  </div>
);

Keys.defaultProp = {
  exercise: '',
};
Keys.propTypes = {
  keys: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Keys;
