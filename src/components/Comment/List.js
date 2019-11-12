/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Reply from './Reply';
import CommentApi from '../../api/commentApi';
import PropTypes from 'prop-types';

class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      courseId: props.courseId,
      comments: []
    };
  }

  componentDidMount () {
    CommentApi.getCommentList(this.state.courseId).then(list =>
      this.setState({
        comments: list
      })
    );
  }

  render () {
    return (
      <>
        <h4>COMMENTS</h4>

        {this.state.comments.map((item, index) => {
          return (
            <div className="comment clearfix" key={index}>
              <img src={item.avatar} alt="Avatar" className="pull-left" />
              <Link to="#">{item.name}</Link>

              <span className="postedon">{item.date}</span>

              <p className="abs">{item.description}</p>
              <Link to="#" className="pull-right greybutton">
                REPLY
              </Link>
            </div>
          );
        })}

        <Reply></Reply>
      </>
    );
  }
}

List.propTypes = {
  props: PropTypes.object
};

export default List;
