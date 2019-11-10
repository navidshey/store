import React from 'react';
import { Link } from 'react-router-dom';
import general from '../../utils/general';
import PropTypes from 'prop-types';

const Box = ({ item, index, colStyle }) => {
  const urlLink = `/detail/${item.id}`;
  return (
    <div className={colStyle} key={general.generateKey(index)}>
      <div className="tutorial">
        <img src={item.imgLink} className="resp-img" alt="Tutorial" />
        <div className="tutorial-details">
          <h6>{item.title}</h6>
          <p>
            <span className="lessons">
              <i className="zmdi zmdi-assignment"></i>
              {item.shortDesc}
            </span>
            <span className="duration">
              <i className="zmdi zmdi-time"></i>
              {item.duration}
            </span>
          </p>
          <p className="abs">{item.desc}</p>
          <Link to={urlLink} className="greybutton">
            VIEW COURSE
          </Link>
        </div>
      </div>
    </div>
  );
};

Box.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  colStyle: PropTypes.string
};

export default Box;
