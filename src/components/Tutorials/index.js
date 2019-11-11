/* eslint-disable no-unused-vars */
import React from 'react';
import Box from './Box';
import general from '../../utils/general';
import PropTypes from 'prop-types';

const Tutorials = ({ props, columnNumbers }) => {
  columnNumbers = 4;
  const colStyle = general.getColumnsStyle(columnNumbers);
  return (
    <>
      {general.chunk(props, columnNumbers).map((items, i) => {
        return (
          <div className="row tutorials" key={general.generateKey(i)}>
            {items.map((item, index) => {
              return (
                <Box
                  key={general.generateKey(index)}
                  item={item}
                  index={index}
                  colStyle={colStyle}
                ></Box>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

Tutorials.propTypes = {
  props: PropTypes.array,
  columnNumbers: PropTypes.number
};

export default Tutorials;
