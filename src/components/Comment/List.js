import React from 'react'
import { Link } from 'react-router-dom'
import Reply from './Reply';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: props.courseId
        }
    }

    componentDidMount() {
        //get comment by courseid
        // this.setState={
// list
        // }
    }

    render() {
        return (
            <>
                <h4>COMMENTS</h4>

                {
                    this.state.list.map((item) => {
                        <div className="comment clearfix">
                            <img src={item.avatar} alt="Avatar" className="pull-left" />
                            <Link to="course-single.html#">{item.name}</Link>

                            <span className="postedon">{item.date}></span>

                            <p className="abs">
                                {item.description}
                            </p>
                            <Link href="course-single.html#" className="pull-right greybutton">REPLY</Link>
                        </div>
                    })
                }

                <Reply></Reply>
            </>
        )
    }
}

export default Comment;