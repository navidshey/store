import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <i className="zmdi zmdi-menu zmdi-hc-lg"></i>
            </button>

            <nav className="collapse navbar-collapse" id="myNavbar">
                <ul>

                    <li className="active">
                        <Link to="/">Home</Link>
                        {/* <ul className="submenu-list submenu">
                            <li><Link to="index1_2.html">Homepage 1</Link></li>
                            <li><Link to="index2.html">Homepage 2</Link></li>
                            <li><Link to="index3.html">Homepage 3</Link></li>
                        </ul> */}
                    </li>
                    <li>
                        <Link to="/courses">Online Courses</Link>
                        {/* <ul className="submenu clearfix">
                            <li>
                                <ul className="sub-column">
                                    <li><Link to="index3.html#">All Courses (817)</Link></li>
                                    <li><Link to="index3.html#">Business (18)</Link></li>
                                    <li><Link to="index3.html#">CMS (14)</Link></li>
                                    <li><Link to="index3.html#">Design (17)</Link></li>
                                    <li><Link to="index3.html#">Development (23)</Link></li>
                                    <li><Link to="index3.html#">Humanities (19)</Link></li>
                                </ul>
                            </li>
                            <li>
                                <ul className="sub-column">
                                    <li><Link to="index3.html#">Medicine (8)</Link></li>
                                    <li><Link to="index3.html#">Music (47)</Link></li>
                                    <li><Link to="index3.html#">Photography (68)</Link></li>
                                    <li><Link to="index3.html#">Photoshop (87)</Link></li>
                                    <li><Link to="index3.html#">IT &amp; Software (41)</Link></li>
                                    <li><Link to="index3.html#">Lifestyle (54)</Link></li>
                                </ul>
                            </li>
                            <li>
                                <ul className="sub-column">
                                    <li><Link to="index3.html#">Science (54)</Link></li>
                                    <li><Link to="index3.html#">Languages (83)</Link></li>
                                    <li><Link to="index3.html#">Business (52)</Link></li>
                                    <li><Link to="index3.html#">SEO (39)</Link></li>
                                    <li><Link to="index3.html#">Marketing (44)</Link></li>
                                    <li><Link to="index3.html#">Video Production (33)</Link></li>
                                </ul>
                            </li>
                        </ul> */}
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                        {/* <ul className="submenu submenu-list">
                            <li><Link to="categories.html">Categories</Link></li>
                            <li><Link to="courses-3-col.html">Courses 3 column</Link></li>
                            <li><Link to="courses-4-col.html">Courses 4 column</Link></li>
                            <li><Link to="courses-gallery.html">Courses Gallery</Link></li>
                            <li><Link to="course-single.html">Course Single</Link></li>
                            <li><Link to="courses-list.html">Courses List</Link></li>
                            <li><Link to="courses-list-sidebar.html">Courses List Sidebar</Link></li>
                            <li><Link to="courses-sidebar.html">Courses Sidebar</Link></li>
                        </ul> */}
                    </li>
                    {/* <li>
                        <Link to="index3.html#">Support</Link>
                        <ul className="submenu submenu-list">
                            <li><Link to="how-it-works.html">How it works</Link></li>
                            <li><Link to="pricing.html">Pricing</Link></li>
                            <li><Link to="services-1.html">Services 1</Link></li>
                            <li><Link to="services-2.html">Services 2</Link></li>
                            <li><Link to="teachers.html">Teachers</Link></li>
                            <li><Link to="teacher-single.html">Teacher Single</Link></li>
                            <li><Link to="blog1.html">Blog 1</Link></li>
                            <li><Link to="blog2.html">Blog 2</Link></li>
                        </ul>
                    </li> */}
                    <li><Link to="/contact">Contact</Link></li>

                </ul>
            </nav>
        </>
    );
}

export default Navbar;
