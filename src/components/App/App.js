import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './App.module.scss';
import Exercise from '../Exercise';
import Keys from '../Keys/Keys';
import Navigation from '../Navigation';

const App = (exercises_data) => {
  const { number, exercises, keys } = exercises_data;

  return (
    <section className={classes.app}>
      <Navigation />
      <Exercise exercise={exercises[number]} />
      <Keys keys={keys[number]} number={number} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  exercises: state.exercisesReducer.exercises,
  keys: state.exercisesReducer.keys,
  number: state.exercisesReducer.number,
});

export default connect(mapStateToProps, null)(App);
