import React from 'react';
import PropTypes from 'prop-types';
import classes from './Exercise.module.scss';

const Exercise = ({ exercise }) => {
  const [exerciseNUmber, task, taskBody, rule, ruleBody] = exercise.split('\n');

  return (
    <div className={classes.exercise}>
      <h2>{`Упражнение  №${exerciseNUmber}`}</h2>
      <span>{task}</span>
      <p>{taskBody}</p>
      <h4>{rule}</h4>
      <p>{ruleBody}</p>
    </div>
  );
};

Exercise.defaultProp = {
  exercise: '',
};
Exercise.propTypes = {
  exercise: PropTypes.string.isRequired,
};
export default Exercise;
