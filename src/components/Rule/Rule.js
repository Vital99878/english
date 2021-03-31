import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import classes from './Rule.module.scss';

function Rule({ rule }) {
  const [rule_title, rulesContent] = rule.split(':');
  const rules = rulesContent.split(',').map((item) => <li className={classes.item}>{item}</li>);

  return (
    <div className={classes.rule}>
      <p className={classes.title}>{rule_title}</p>
      <Markdown>{rulesContent}</Markdown>
    </div>
  );
}

Rule.defaultProp = {};
Rule.propTypes = {
  rule: PropTypes.string.isRequired,
};
export default Rule;
