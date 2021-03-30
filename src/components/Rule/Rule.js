import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import classes from './Rule.module.scss';

function Rule({ rule }) {
  const [rule_title, rulesContent] = rule.split(':');
  const rules = rulesContent.split(',').map((item) => <li className={classes.item}>{item}</li>);

  return (
    <div className={classes.rule}>
      {/*<p className={classes.title}>{rule_title}</p>*/}
      <ReactMarkdown source={rule} escapeHtml={false} />
      {/*<ul className={classes.list}>{rules}</ul>*/}
    </div>
  );
}

Rule.defaultProp = {};
Rule.propTypes = {
  rule: PropTypes.string.isRequired,
};
export default Rule;
