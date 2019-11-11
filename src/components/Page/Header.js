/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, hasBreadCrumb = false }) => {
  return (
    <div className="page-heading text-center">
      <div className="container">
        <h2>{title}</h2>
        {hasBreadCrumb && (
          <p className="breadcrumbs">
            <a href="course-single.html#">Home</a>
            <i className="zmdi zmdi-chevron-right"></i>
            <a href="course-single.html#">Courses</a>
            <i className="zmdi zmdi-chevron-right"></i>
            <a href="course-single.html#">Adobe Photoshop</a>
            <i className="zmdi zmdi-chevron-right"></i>
            <span>Adobe Photoshop CC for Professionals</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  hasBreadCrumb: PropTypes.bool
};
