import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../Page'
import Search from '../Page/Search';
import Tutorials from '../Tutorials';

class CourseList extends React.Component {

    constructor(props, columnNumbers=4) {
        super(props);
        this.state = {
            columnNumbers: columnNumbers ? columnNumbers :4
        };
    }

    render() {

        let tutorialsList = [{imgLink: "../../images/popular/1.jpg", duration:"3:15h", title:"111111111111111111111111111111", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/2.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/3.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/1.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/2.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/3.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/1.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/2.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"},
{imgLink: "../../images/popular/3.jpg", duration:"3:15h", title:"How to become an UX Designer", shortDesc:"12 LESSONS", desc:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.", link:"/tutorial"}];


        return (
            <main>
                <Header title="OUR COURSES"></Header>


                <div className="container courses-browse popular">
                    <Search></Search>
                    <Tutorials props={tutorialsList} columnNumbers={this.state.columnNumbers}></Tutorials>

                </div>

            </main>
        )
    }

}

export default CourseList;
