import React from 'react'
import { Link } from 'react-router-dom'
import Reply from './Reply';
import CommentApi from '../../api/commentApi'

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: props.courseId,
            comments: []
        }
    }

    componentDidMount() {
        //get comment by courseid
        debugger; 
        CommentApi.getCommentList(this.state.courseId)
        .then(list=>this.setState({
             comments: list
          })); 
    }

    render() {
        return (
            <>
                <h4>COMMENTS</h4>

                {
                    this.state.comments.map((item) => {
                        return (
                            <div className="comment clearfix">
                                <img src={item.avatar} alt="Avatar" className="pull-left" />
                                <Link to="#">{item.name}</Link>

                                <span className="postedon">{item.date}</span>

                                <p className="abs">
                                    {item.description}
                                </p>
                                <Link to="#" className="pull-right greybutton">REPLY</Link>
                            </div>
                        )
                    })
                }

                <Reply></Reply>
            </>
        )
    }
}

export default List;