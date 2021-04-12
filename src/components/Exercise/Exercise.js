import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as actions from '../../redux/actions';
import Rule from '../Rule';
import { createIndex, debounce } from '../../utilites';
import classes from './Exercise.module.scss';

const Exercise = ({ exercise, nextExercise, previousExercise, goToExercise, pureKeys }) => {
  goToExercise = debounce(goToExercise, 500);
  const { exerciseNumber, todo, exerciseBody: exerciseData, rule, ruleBody } = exercise;
  const [answers, setAnswers] = useState({});
  const [check, setCheck] = useState(false);
  const { register, handleSubmit } = useForm();

  function checkExercises(data) {
    setCheck(true);
    setAnswers(data);
    /* eslint-disable no-console */
    console.log(data);
  }

  function* inputCheckClass() {
    let keyIndex = 0;
    while (true) {
      yield answers[`key_${keyIndex}`] === pureKeys?.[keyIndex] || answers[`key_${keyIndex}`] === '…'
        ? classes.input
        : classes.inputWrong;
      keyIndex += 1;
    }
  }
  let inputClass = inputCheckClass();

  useEffect(() => {
    if (localStorage.getItem('exercise')) {
      goToExercise(Number(localStorage.getItem('exercise')));
    }
  }, []);
  useEffect(() => {
    inputClass = inputCheckClass();
  }, [answers]);

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
      <span key={Math.random() * 100}>
        <span>{item}</span>
        <input
          className={!check ? classes.input : inputClass.next().value}
          type="text"
          {...register(`key_${inputName.next().value}`)}
          onChange={(evt) => {
            evt.target.style.width = `${evt.target.value.length * 12}px`;
          }}
          defaultValue="…"
        />
      </span>
    );
  });

  return (
    <article className={classes.mainWrapper}>
      <div className={classes.exercise}>
        <h2 className={classes.exerciseTitle}>{`Упражнение  №${exerciseNumber}`}</h2>
        <span className={classes.exerciseTodo}>{todo}</span>
        <p className={classes.exerciseBody}>{exerciseBody}</p>
        <button className={classes.checkButton} type="button" onClick={handleSubmit(checkExercises)}>
          Проверить
        </button>
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
  pureKeys: PropTypes.arrayOf.isRequired,
  nextExercise: PropTypes.func.isRequired,
  previousExercise: PropTypes.func.isRequired,
  goToExercise: PropTypes.func.isRequired,
};

export default connect(null, actions)(Exercise);
