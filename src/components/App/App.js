import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './App.module.scss';
import Exercise from '../Exercise';
import Keys from "../Keys/Keys";
import Navigation from '../Navigation';

const App = (exercises_data) => {
  const { number, exercises, keys } = exercises_data;


  const exercise = exercises[number];
 const exercise_keys = keys[number];


  return (
    <section className={classes.app}>
       <Navigation />
      <Exercise exercise={exercise} />
      <Keys keys={exercise_keys}/>
    </section>
  );
};

const mapStateToProps = (state) => ({
  exercises: state.exercisesReducer.exercises,
  keys: state.exercisesReducer.keys,
  number: state.exercisesReducer.number,
});



export default connect(mapStateToProps, null)(App);
