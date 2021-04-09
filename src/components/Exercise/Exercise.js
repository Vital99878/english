import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import Rule from '../Rule';
import { createIndex, debounce } from '../../utilites';
import classes from './Exercise.module.scss';

const Exercise = ({ exercise, nextExercise, previousExercise, goToExercise }) => {
  goToExercise = debounce(goToExercise, 500);
  const { exerciseNumber, todo, exerciseBody: exerciseData, rule, ruleBody } = exercise;

  useEffect(() => {
    if (localStorage.getItem('exercise')) {
      goToExercise(Number(localStorage.getItem('exercise')));
    }
  }, []);

  const inputName = createIndex();
  const dataForBody = exerciseData.split('…');
  const exerciseBody = dataForBody.map((item, index) => {
    if (index === dataForBody.length - 1) {
      return (
        <>
          <span>{item}</span>
        </>
      );
    }
    return (
      <>
        <span>{item}</span>
        <input
          key={item}
          onChange={(evt) => {
            evt.target.style.width = `${evt.target.value.length * 16}px`;
          }}
          className={classes.input}
          type="text"
          name={inputName.next().value}
          defaultValue="…"
        />
      </>
    );
  });

  return (
    <article className={classes.mainWrapper}>
      <div className={classes.exercise}>
        <h2 className={classes.exerciseTitle}>{`Упражнение  №${exerciseNumber}`}</h2>
        <span className={classes.exerciseTodo}>{todo}</span>
        <p className={classes.exerciseBody}>{exerciseBody}</p>
      </div>
      <Rule rule={rule} ruleBody={ruleBody} />
      <form className={classes.nextPrevWrapper}>
        <button type="button" className={classes.nextPrev} onClick={() => previousExercise(Number(exerciseNumber))}>
          Prev
        </button>
        <button type="button" className={classes.nextPrev} onClick={() => nextExercise(Number(exerciseNumber))}>
          Next
        </button>
        <input
          type="number"
          placeholder="go to "
          className={classes.goTo}
          onChange={(evt) => {
            window.scrollTo(0, 0);
            const number = evt.target.value;
            if (number >= 1 && number < 568) {
              goToExercise(number);
            }
          }}
        />
      </form>
    </article>
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
