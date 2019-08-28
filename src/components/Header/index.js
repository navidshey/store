import React from 'react'
import MultiLang from './MultiLang'
import Nabvar from './Navbar'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import cartImg from '../../assets/images/cart1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Navbar';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let langs = [{ link: "index2.html", title: "فا" }, { link: "index1.html", title: "En" }];
        // debugger;
        return (
            <header>
                <MultiLang langList={langs} />
                <div className="container">
                    <div id="topbar">
                        <div className="pull-right">
                            <div className="navigation">

                                <Navbar></Navbar>

                            </div>
                            <Link to="/index" className="blueplay login"> Login</Link>
                            <Link to="/index" className="register">Register</Link>

                            <div className="cart">

                                <Link to="index">
                                    <FontAwesomeIcon icon="shopping-bag" size="2x" />
                                    <span className="fa-layers-text fa-inverse" >4</span>
                                </Link>
                                <div className="cart-container">
                                    <h6>SHOPPING CART (2)</h6>
                                    <div className="cart-item clearfix">
                                        <img src={cartImg} alt="cart item" className="pull-left" />
                                        <Link to="/index"> How to become an UX Designer</Link>
                                        <p className="quantity">1x $39,99</p>
                                        <button className="remove">x DELETE</button>
                                    </div>
                                    <div className="cart-item clearfix">
                                        <img src={cartImg} alt="cart item" className="pull-left" />
                                        <Link to="/index">How to become an UX Designer</Link>
                                        <p className="quantity">1x $39,99</p>
                                        <button className="remove">x DELETE</button>
                                    </div>
                                    <div className="cart-controls text-center">
                                        <Link to="/index" className="checkout">CHECKOUT</Link>
                                        <Link to="/index" className="viewcart">VIEW CART</Link>
                                        <Link to="/index" className="addcourse">+ ADD COURSE</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="search">
                                <Link to="/index" className="search"><FontAwesomeIcon icon="search" size="2x"></FontAwesomeIcon></Link>
                                <div className="search-something">
                                    <input type="search" placeholder="search for something" />
                                    <Link to="/index" >
                                        <FontAwesomeIcon icon="search" size="1x" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <h1 className="logo">
                            <Link to="/index" >
                                <img src={logo} alt="Logo" />
                            </Link>
                        </h1>
                    </div>



                    <div id="slider-text" className="row">
                        {/* <div className="col-md-8 col-md-offset-2 text-center">
                            <p className="pretitle">ONLINE VIDEO TRAININGS</p>
                            <h2>PROOF YOUR TALENT</h2>
                            <p>Learn something new every day and get inspired by the diversity of online learning</p>
                            <a href="index3.html#" className="bluebutton">SIGN UP AND GET A 7-DAYS FREE TRIAL</a>
                        </div> */}
                    </div>
                </div>

                <div id="slide-images">
                    {/* <ul className="rslides-header" >
                        <li><img src={slider1} className="resp-img" alt="Slide" /></li>
                        <li><img src={slider2} className="resp-img" alt="Slide" /></li>
                        <li><img src={slider3} className="resp-img" alt="Slide" /></li>
                    </ul> */}
                </div>
            </header>
        );
    }
}

export default Header;