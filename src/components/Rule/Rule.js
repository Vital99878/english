import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import classes from './Rule.module.scss';

function Rule({ rule, ruleBody }) {
  if (!rule) rule = '';
  if (!ruleBody) ruleBody = '';
  if (!rule && !ruleBody) return null;

  return (
    <div className={classes.rule}>
      <h2 className={classes.title}>{rule}</h2>
      <Markdown>{ruleBody}</Markdown>
    </div>
  );
}

Rule.defaultProp = {};
Rule.propTypes = {
  rule: PropTypes.string.isRequired,
  ruleBody: PropTypes.string.isRequired,
};
export default Rule;
