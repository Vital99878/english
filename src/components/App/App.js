import React, { useState } from 'react';
import {connect} from "react-redux";
import classes from './App.module.scss';
import Exercise from "../Exercise";



const App = (exercises_data) => {
  const {number, exercises} = exercises_data

  const exercise = exercises[number];
  
  return (
    <section className={classes.app}>
      <Exercise exercise={exercise} />
    </section>
  );
};

const mapDispatchToProps = (state) => ({
  exercises: state.exercisesReducer.exercises,
  number: state.exercisesReducer.number,
})

export default connect(mapDispatchToProps)(App);
