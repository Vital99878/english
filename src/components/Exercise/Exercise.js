import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions'

import classes from './Exercise.module.scss';

const Exercise = ({ exercise, nextExercise, previousExercise }) => {
  const [exerciseNUmber, task, taskBody, rule, ruleBody] = exercise.split('\n');
  


  function changeInputWidth(evt) {
    evt.target.style.width = `${evt.target.value.length * 16}px`;
  }


  const bodyInputs = taskBody.split('…').map((item) => (
    <>
      <span>{item}</span>
      <input onChange={changeInputWidth} className={classes.input} type="text" defaultValue="…" />
    </>
  ));

  return (
    <div className={classes.exercise}>
      <h2>{`Упражнение  №${exerciseNUmber}`}</h2>
      <span>{task}</span>
      <p>{bodyInputs}</p>
      <h4>{rule}</h4>
      <p>{ruleBody}</p>
      <div className={classes.next}>
        <button type="button" onClick={() => previousExercise(Number(exerciseNUmber))}>
          Previous
        </button>
        <button type="button" onClick={() => nextExercise(Number(exerciseNUmber))}>
          Next
        </button>
      </div>
    </div>
  );
};

Exercise.defaultProp = {
  exercise: '',
};
Exercise.propTypes = {
  exercise: PropTypes.string.isRequired,
  nextExercise: PropTypes.func.isRequired,
  previousExercise: PropTypes.func.isRequired,
};



export default connect(null, actions)(Exercise);
