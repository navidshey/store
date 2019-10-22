/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../../assets/images/logo.png'
import payments1 from '../../assets/images/payments/1.png'
import payments2 from '../../assets/images/payments/2.png'
import payments3 from '../../assets/images/payments/3.png'
import payments4 from '../../assets/images/payments/4.png'
import payments5 from '../../assets/images/payments/5.png'

const Footer = () => {
  return (
    <footer>

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <h1 className="logo"><a href="index.html"><img src={logo} alt="Logo"/></a></h1>
            <ul className="contactinfo">
              <li className="address"><strong>Address:</strong> 127 Sith Avenue, 54571 New York City </li>
              <li className="phone"><strong>Phone:</strong>  +49 123 456 789</li>
              <li className="email"><strong>E-mail:</strong>  info@bromine-theme.com</li>
            </ul>
            <ul className="social">
              <li><a href="index3.html#"><i className="zmdi zmdi-facebook"></i></a></li><li>
                <a href="index3.html#"><i className="zmdi zmdi-twitter"></i></a></li><li>
                <a href="index3.html#"><i className="zmdi zmdi-google-old"></i></a></li><li>
                <a href="index3.html#"><i className="zmdi zmdi-pinterest"></i></a></li><li>
                <a href="index3.html#"><i className="zmdi zmdi-instagram"></i></a></li><li>
                <a href="index3.html#"><i className="zmdi zmdi-rss"></i></a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-12">
            <h6>GET HELP</h6>
            <ul className="information">
              <li><a href="index3.html#">Help and FAQ</a></li>
              <li><a href="index3.html#">Video Courses</a></li>
              <li><a href="index3.html#">Online Booking</a></li>
              <li><a href="index3.html#">Online Support</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-12">
            <h6>INFORMATION</h6>
            <ul className="information">
              <li><a href="index3.html#">About us</a></li>
              <li><a href="index3.html#">Our services</a></li>
              <li><a href="index3.html#">Order history</a></li>
              <li><a href="index3.html#">Information</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-12">
            <h6>MY ACCOUNT</h6>
            <ul className="information">
              <li><a href="index3.html#">Plans &amp; Pricings</a></li>
              <li><a href="index3.html#">Favorites</a></li>
              <li><a href="index3.html#">Personal info</a></li>
              <li><a href="index3.html#">Login</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12">
            <h6>QUICKLINKS</h6>
            <ul className="information">
              <li><a href="index3.html#">Video Training</a></li>
              <li><a href="index3.html#">Online Courses</a></li>
              <li><a href="index3.html#">Become a teacher</a></li>
              <li><a href="index3.html#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="row botbar">
          <div className="col-sm-7">
            <p className="copyright">Copyright 2017 &copy; Bromine - Video Learning Platform  | All Rights Reserved</p>
          </div>
          <div className="col-sm-5">
            <ul className="pull-right payments">
              <li><a href="index3.html#"><img src={payments1} alt="Payment"/></a></li>
              <li><a href="index3.html#"><img src={payments2} alt="Payment"/></a></li>
              <li><a href="index3.html#"><img src={payments3} alt="Payment"/></a></li>
              <li><a href="index3.html#"><img src={payments4} alt="Payment"/></a></li>
              <li><a href="index3.html#"><img src={payments5} alt="Payment"/></a></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
