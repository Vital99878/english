import React from 'react';
import PropTypes from 'prop-types';
import classes from './Navigation.module.scss';

function Navigation() {
  const { navigation } = classes;
  return <div className={navigation}>Navigation component</div>;
}

Navigation.defaultProp = {};
Navigation.propTypes = {};
export default Navigation;
