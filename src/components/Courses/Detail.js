import React from 'react'
import { Header } from '../Page'
import TutorialApi from '../../api/tutoralApi'
import List from '../Comment/List'
import general from '../../utils/general'

class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            imgUrl: "",
            title: "",
            lessonNumber: null,
            duration: "",
            viewed: "",
            courseDetails: ""
        }
    }

    componentDidMount() {
        general.changeIdByElement("body", "course-single");
        TutorialApi.getById(this.props.match.params.id)
        .then(item=>
            this.setState({
            id: this.props.match.params.id,
            imgUrl: item.imgUrl,
            title: item.title,
            lessonNumber: item.lessonNumber,
            duration: item.duration,
            viewed: item.viewed,
            courseDetails: item.courseDetails
          })); 
    }


    render() {
        return (
            <>
                <Header title="SiNGLE COURSE"></Header>

                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <img src={this.state.imgUrl} alt="Course" className="resp-img course-preview" />

                            <h3>{this.state.title}</h3>
                            <p className="class-details">
                                <span className="lessons"><i className="zmdi zmdi-assignment"></i>{this.state.lessonNumber} LESSONS</span>
                                <span className="duration"><i className="zmdi zmdi-time"></i>{this.state.duration}</span>
                                <span className="views"><i className="zmdi zmdi-eye"></i>{this.state.viewed} VIEWS</span>
                            </p>


                            <h4>COURSE DETAILS</h4>
                            <p className="abs">
                                {this.state.courseDetails}
                            </p>

                            {/* <h5>What does this course include?</h5>
                            <ul className="includes">
                                <li>Lorem ipsum dolor sit amet, consectetuer adipisc.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                                <li>Nunc dignissim risus id metus.</li>
                                <li>Cras ornare tristique elit.</li>
                                <li>Vivamus vestibulum nulla nec ante.</li>
                            </ul> */}

                            <h4>COURSE CONTENT</h4>
                            <ul className="course-accordion">
                                <li className="accordion-option opened">
                                    <div className="option-title">Section #1: Tools in Photoshop <span>(4 videos)</span></div>
                                    <div className="option-wrapper">
                                        <ul className="option-items">
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">0.15 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Epsum factorial non deposit quid.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">0.31 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Pro quo hic escorol olypian.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">1.29 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Et gorilla congolium sic.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">1.29 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Ad nauseum souvlaki ignitus carborundum.</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="accordion-option">
                                    <div className="option-title">Section #2: Working with layers <span>(6 videos)</span></div>
                                    <div className="option-wrapper">
                                        <ul className="option-items">
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">0.15 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Epsum factorial non deposit quid.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">0.31 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Pro quo hic escorol olypian.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">1.29 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Et gorilla congolium sic.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">1.29 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Ad nauseum souvlaki ignitus carborundum.</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="accordion-option">
                                    <div className="option-title">Section #3: Functions and effects <span>(5 videos)</span></div>
                                    <div className="option-wrapper">
                                        <ul className="option-items">
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">0.15 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Epsum factorial non deposit quid.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">0.31 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Pro quo hic escorol olypian.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">1.29 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Et gorilla congolium sic.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">1.29 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Ad nauseum souvlaki ignitus carborundum.</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="accordion-option">
                                    <div className="option-title">Section #4: New features in Adobe Photoshop <span>(3 videos)</span></div>
                                    <div className="option-wrapper">
                                        <ul className="option-items">
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">0.15 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Epsum factorial non deposit quid.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">0.31 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Pro quo hic escorol olypian.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">1.29 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Et gorilla congolium sic.</a>
                                            </li>
                                            <li className="option-item">
                                                <div className="pull-right">
                                                    <span className="duration">1.29 h</span><a href="course-single.html#"><i className="zmdi zmdi-star"></i></a>
                                                </div>
                                                <a href="course-single.html#">Ad nauseum souvlaki ignitus carborundum.</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <List courseId={this.state.id}></List>

                        </div>
                        <div className="col-md-3">
                            <div className="order text-center">
                                <p className="price">59</p>
                                <p>SINGLE PRICE</p>
                                <a href="course-single.html#" className="blueplay">BUY THIS COURSE</a>
                                <p className="order-or"><span>OR</span></p>
                                <p>SIGN UP FOR</p>
                                <a href="course-single.html#" className="greybutton">PREMIUM MEMBERSHIP</a>
                            </div>
                            <div className="pros">
                                <h4>ABOUT THE TEACHER</h4>
                                <div className="teacher text-center">
                                    <div className="imgcontainer">
                                        <img src="assets/images/avatars/2.png" alt="Avatar" />
                                        <div className="overlay">
                                            <img src="assets/images/avatars/profile.png" alt="Profile" />
                                            <p>8 VIDEOS</p>
                                        </div>
                                    </div>
                                    <a href="course-single.html#">Jonathan Creon</a>
                                    <p>DESINGER</p>
                                    <ul className="social">
                                        <li><a href="course-single.html#"><i className="zmdi zmdi-facebook"></i></a></li><li>
                                            <a href="course-single.html#"><i className="zmdi zmdi-twitter"></i></a></li><li>
                                            <a href="course-single.html#"><i className="zmdi zmdi-google-old"></i></a></li><li>
                                            <a href="course-single.html#"><i className="zmdi zmdi-pinterest"></i></a></li><li>
                                            <a href="course-single.html#"><i className="zmdi zmdi-email"></i></a></li><li>
                                            <a href="course-single.html#"><i className="zmdi zmdi-globe-alt"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ratings">
                                <h4>COURSE RATINGS</h4>
                                <div className="rating">
                                    <a href="course-single.html#" className="on"><i className="zmdi zmdi-star zmdi-hc-2x"></i></a>
                                    <a href="course-single.html#" className="on"><i className="zmdi zmdi-star zmdi-hc-2x"></i></a>
                                    <a href="course-single.html#" className="on"><i className="zmdi zmdi-star zmdi-hc-2x"></i></a>
                                    <a href="course-single.html#" className="on"><i className="zmdi zmdi-star zmdi-hc-2x"></i></a>
                                    <a href="course-single.html#"><i className="zmdi zmdi-star zmdi-hc-2x"></i></a>
                                </div>
                                <p>(37 votes, average: <strong>4.8</strong> out of 5)</p>
                            </div>
                            <div className="popular-courses index-3-categories">
                                <h4>POPULAR COURSES</h4>
                                <div className="courses-side-slick">
                                    <div className="category-with-bg text-center cat1">
                                        <h5>Content-Management-Systems</h5>
                                        <p>IT-Service for CMS like WordPress</p>
                                        <a href="course-single.html#" className="goto"><i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                    <div className="category-with-bg text-center cat2">
                                        <h5>User Experience / UX Design</h5>
                                        <p>Workshop for UX Design</p>
                                        <a href="course-single.html#" className="goto"><i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                    <div className="category-with-bg text-center cat3">
                                        <h5>Typography &amp; Writing</h5>
                                        <p>Work with InDesign</p>
                                        <a href="course-single.html#" className="goto"><i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="categories">
                                <h6>CATEGORIES</h6>
                                <ul>
                                    <li><a href="course-single.html#">Business (18)</a></li>
                                    <li><a href="course-single.html#">CMS (14)</a></li>
                                    <li><a href="course-single.html#">Design (17)</a></li>
                                    <li><a href="course-single.html#">Development (23)</a></li>
                                    <li><a href="course-single.html#">Humanities (17)</a></li>
                                    <li><a href="course-single.html#">Mecidine (8)</a></li>
                                    <li><a href="course-single.html#">Music (47)</a></li>
                                    <li><a href="course-single.html#">Photography (68)</a></li>
                                    <li><a href="course-single.html#">Photoshop (87)</a></li>
                                    <li><a href="course-single.html#">IT &amp; Software (41)</a></li>
                                    <li><a href="course-single.html#">Lifestyle (54)</a></li>
                                    <li><a href="course-single.html#">Languages (83)</a></li>
                                    <li><a href="course-single.html#">SEO (39)</a></li>
                                    <li><a href="course-single.html#">Marketing (44)</a></li>
                                    <li><a href="course-single.html#">Video Production (33)</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Detail;