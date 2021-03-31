import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import Rule from '../Rule';
import classes from './Exercise.module.scss';

const Exercise = ({ exercise, nextExercise, previousExercise, goToExercise }) => {
  const { exerciseNumber, todo, exerciseBody, rule, ruleBody } = exercise;

  useEffect(() => {
    if (localStorage.getItem('exercise')) {
      goToExercise(Number(localStorage.getItem('exercise')));
    }
  }, []);

  function changeInputWidth(evt) {
    evt.target.style.width = `${evt.target.value.length * 16}px`;
  }

  const dataForBody = exerciseBody.split('…');
  const bodyInputs = dataForBody.map((item) => (
    <>
      <span>{item}</span>
      <input onChange={changeInputWidth} className={classes.input} type="text" defaultValue="…" />
    </>
  ));

  return (
    <div className={classes.exercise}>
      <h2>{`Упражнение  №${exerciseNumber}`}</h2>
      <span>{todo}</span>
      <p>{bodyInputs}</p>
      {(rule && rule.includes(':') && <Rule rule={rule} />) || (rule && <p className={classes.rule}>{rule}</p>)}
      <p>{ruleBody}</p>
      <div className={classes.next}>
        <button type="button" onClick={() => previousExercise(Number(exerciseNumber))}>
          Previous
        </button>
        <button type="button" onClick={() => nextExercise(Number(exerciseNumber))}>
          Next
        </button>
        <input
          type="number"
          placeholder="go to exercise"
          onChange={(evt) => {
            window.scrollTo(0, 0);
            const number = evt.target.value;
            if (number >= 1 && number < 568) {
              goToExercise(evt.target.value);
            }
          }}
        />
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
