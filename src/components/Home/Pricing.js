import React from 'react'
import {Link} from 'react-router-dom'

const Pricing = ({props})=>{
    return(

        <div className="container pricings">
		<div className="row">
			<div className="col-sm-12 text-center">
				<h3>Plans &amp; Pricings</h3>
			</div>
		</div>
		<div className="row text-center">
			<div className="col-md-3 col-sm-6">
				<div className="plan">
					<p className="ribbon">MOST POPULAR</p>
					<p className="price">45</p>
					<p className="crew">1-5 PROFESSIONALS</p>
					<div className="plan-details">
						<p>Unlimited Courses</p>
						<p>Online pass purchases</p>
						<p>Online class reservations</p>
						<p>Full Library Entry</p>
						<p>Promo Code feature</p>
					</div>
					<a href="index3.html#"><i className="zmdi zmdi-arrow-right"></i>FREE TRIAL</a>
					<a href="index3.html#"><i className="zmdi zmdi-arrow-right"></i>ORDER NOW</a>
				</div>
			</div>
			<div className="col-md-3 col-sm-6">
				<div className="plan mostpopular">
					<p className="ribbon">MOST POPULAR</p>
					<p className="price">59</p>
					<p className="crew">6-10 PROFESSIONALS</p>
					<div className="plan-details">
						<p>Unlimited Courses</p>
						<p>Online pass purchases</p>
						<p>Online class reservations</p>
						<p>Full Library Entry</p>
						<p>Promo Code feature</p>
					</div>
					<a href="index3.html#"><i className="zmdi zmdi-arrow-right"></i>FREE TRIAL</a>
					<a href="index3.html#"><i className="zmdi zmdi-arrow-right"></i>ORDER NOW</a>
				</div>
			</div>
			<div className="col-md-3 col-sm-6">
				<div className="plan">
					<p className="ribbon">MOST POPULAR</p>
					<p className="price">99</p>
					<p className="crew">11-15 PROFESSIONALS</p>
					<div className="plan-details">
						<p>Unlimited Courses</p>
						<p>Online pass purchases</p>
						<p>Online class reservations</p>
						<p>Full Library Entry</p>
						<p>Promo Code feature</p>
					</div>
					<a href="index3.html#"><i className="zmdi zmdi-arrow-right"></i>FREE TRIAL</a>
					<a href="index3.html#"><i className="zmdi zmdi-arrow-right"></i>ORDER NOW</a>
				</div>
			</div>
			<div className="col-md-3 col-sm-6">
				<div className="plan">
					<p className="ribbon">MOST POPULAR</p>
					<p className="price">119</p>
					<p className="crew">OVER 15 PROFESSIONALS</p>
					<div className="plan-details">
						<p>Unlimited Courses</p>
						<p>Online pass purchases</p>
						<p>Online class reservations</p>
						<p>Full Library Entry</p>
						<p>Promo Code feature</p>
					</div>
					<a href="index3.html#"><i className="zmdi zmdi-arrow-right"></i>FREE TRIAL</a>
					<a href="index3.html#"><i className="zmdi zmdi-arrow-right"></i>ORDER NOW</a>
				</div>
			</div>
		</div>
	</div>


    );
}
export default Pricing;