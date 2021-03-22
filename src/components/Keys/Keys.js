import React from 'react';
import PropTypes from 'prop-types';
import classes from './Keys.module.scss';

const Keys = ({ keys }) => {
  const [exerciseNUmber, keysBody] = keys.split('\n');

  return (
    <div className={classes.keys}>
      <h2>{`Упражнение  №${exerciseNUmber}. Ключи`}</h2>
      <p>{keysBody}</p>
    </div>
  );
};

Keys.defaultProp = {
  exercise: '',
};
Keys.propTypes = {
  keys: PropTypes.string.isRequired,
};

export default Keys;



