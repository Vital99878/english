import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './App.module.scss';
import Exercise from '../Exercise';
import Navigation from '../Navigation';

const App = (exercises_data) => {
  const { number, exercises } = exercises_data;

  const exercise = exercises[number];

  return (
    <section className={classes.app}>
      <Navigation />
      <Exercise exercise={exercise} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  exercises: state.exercisesReducer.exercises,
  number: state.exercisesReducer.number,
});



export default connect(mapStateToProps, null)(App);
