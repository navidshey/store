import React from 'react'
import PropTypes from 'prop-types'
import { Header, Pagination } from '../Page'
import Search from '../Page/Search';
import Tutorials from '../Tutorials';
import TutorialApi from '../../api/tutoralApi'


class CourseList extends React.Component {

    constructor(props, columnNumbers) {
        super(props);
        this.state = {
            columnNumbers: columnNumbers ? columnNumbers :3,
            tutorials: []
        };
    }

    componentDidMount() {
        TutorialApi.getList()
        .then(list=>this.setState({
             tutorials: list
          }));
    };


    render() {

        let tutorialsList = [{imgLink: "../../images/popular/1.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/2.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/3.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/1.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/2.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/3.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/1.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/2.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/3.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"}];

const total = 5,
    current = 2,
    url = "/courses";

        return (
            <main>
                <Header title="OUR COURSES"></Header>


                <div className="container courses-browse popular">
                    <Search></Search>
                    <Tutorials props={this.state.tutorials} columnNumbers={this.state.columnNumbers}></Tutorials>
                    <Pagination total={total} current={current} url={url}></Pagination>
                </div>

            </main>
        )
    }

}

CourseList.defaultProps={
    columnNumbers: 3  
};

CourseList.propTypes ={
    columnNumbers: PropTypes.number
}

export default CourseList;
