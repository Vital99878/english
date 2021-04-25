import React, { FC } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './App.module.scss';
import Exercise from '../Exercise';
import Keys from '../Keys';
import Navigation from '../Navigation';
import { pureKeys } from '../../data/pureKeys';

const App = ({ textbook, exerciseNumber }) => (
  <section className={classes.app}>
    {/*<Test />*/}
    <Navigation />
    <Exercise exercise={textbook[exerciseNumber]} pureKeys={pureKeys?.[`exercise_${exerciseNumber}`]} />
    <Keys keys={textbook[exerciseNumber].keys} number={exerciseNumber} />
  </section>
);

App.propTypes = {
  textbook: PropTypes.arrayOf.isRequired,
  exerciseNumber: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({
  textbook: state.exercisesReducer.textbook,
  exerciseNumber: state.exercisesReducer.exerciseNumber,
});

export default connect(mapStateToProps, null)(App);
