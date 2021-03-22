import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions'

import classes from './Exercise.module.scss';

const Exercise = ({ exercise, nextExercise, previousExercise, goToExercise }) => {
  const [exerciseNUmber, task, taskBody, rule, ruleBody] = exercise.split('\n');


  useEffect(() => {
      if (localStorage.getItem('exercise')) {
          goToExercise( Number(localStorage.getItem('exercise')))
      }
  },[])

  function changeInputWidth(evt) {
    evt.target.style.width = `${evt.target.value.length * 16}px`;
  }

    const dataForBody = taskBody.split('…')
    const bodyInputs =dataForBody.map((item) => (
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
          <input type="number" placeholder='go to exercise' onChange={(evt) => {
              window.scrollTo(0, 0)
              const number = evt.target.value
              if (number >= 1 && number < 568) {
                  goToExercise (evt.target.value);
              }
          }}/>
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
    goToExercise: PropTypes.func.isRequired,
};



export default connect(null, actions)(Exercise);
