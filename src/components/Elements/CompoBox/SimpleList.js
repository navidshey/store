import React from 'react';
import PropTypes from 'prop-types';

const SimpleList = ({ title, list, name }) => {
  return (
    <select name={name} className="jquery-select">
      <option>{title}</option>
      {list.map(item => {
        return (
          <option value={item.value} key={item.value}>
            {item.title}
          </option>
        );
      })}
    </select>
  );
};

SimpleList.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  list: PropTypes.array
};
export default SimpleList;
