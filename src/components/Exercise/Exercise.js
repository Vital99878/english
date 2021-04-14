import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as actions from '../../redux/actions';
import Rule from '../Rule';
import Modal from '../Modal';
import { createIndex, debounce, inputCheckClass } from '../../utilites';
import classes from './Exercise.module.scss';

const Exercise = ({ exercise, nextExercise, previousExercise, goToExercise, pureKeys }) => {
  goToExercise = debounce(goToExercise, 500);
  const { exerciseNumber, todo, exerciseBody: exerciseData, rule, ruleBody } = exercise;
  const [answers, setAnswers] = useState({});
  const { register, handleSubmit } = useForm();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function checkExercises(data) {
    setAnswers(data);
    if (!pureKeys) {
      setModalIsOpen(true);
    }
    data.exerciseNumber = exerciseNumber;
  }

  let wrongClass = inputCheckClass(answers, pureKeys, classes.inputWrong);

  useEffect(() => {
    if (localStorage.getItem('exercise')) {
      const numberFromLS = Number(localStorage.getItem('exercise'));
      goToExercise(numberFromLS);
    }
  }, []);
  useEffect(() => {
    wrongClass = inputCheckClass();
  }, [answers]);

  // todo Исправить в exercises_data exerciseBody и удалить затем данное условие ключи до 200 упражнения
  if (!exercise.exerciseBody) {
    return (
      <article className={classes.mainWrapper}>
        Пока недоступно.
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
              const number = evt.target.value;
              if (number >= 1 && number < 568) {
                goToExercise(number);
              }
            }}
          />
        </form>
      </article>
    );
  }

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
      <span key={item}>
        <span>{item}</span>
        <input
          key={item}
          className={`${classes.input} ${wrongClass.next().value}`}
          type="text"
          {...register(`key_${inputName.next().value}`)}
          onChange={(evt) => {
            evt.target.style.width = `${evt.target.value.length * 14}px`;
          }}
          defaultValue="…"
        />
      </span>
    );
  });

  return (
    <article className={classes.mainWrapper}>
      <Modal
        keys={answers}
        exerciseNumber={exerciseNumber}
        open={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      />
      <div className={classes.exercise}>
        <h2 className={classes.exerciseTitle}>{`Упражнение  №${exerciseNumber}`}</h2>
        <span className={classes.exerciseTodo}>{todo}</span>
        <p className={classes.exerciseBody}>{exerciseBody}</p>
        <button className={classes.checkButton} type="button" onClick={handleSubmit(checkExercises)}>
          {pureKeys ? 'Проверить' : 'Отправить ответы'}
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
