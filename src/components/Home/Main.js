import React from 'react'
import Features from './Features'
import Professionals from './professionals'

const Main = ()=>{

	let prosList  = [{ avatar: "../../assets/images/avatars/1.png", profileImg: "../../assets/images/avatars/profile.png", shortDesc: "8 VIDEOS", title:"Kevin Mcfield"  },
	{ avatar: "../../assets/images/avatars/2.png", profileImg: "../../assets/images/avatars/profile.png", shortDesc: "8 VIDEOS", title:"Kevin Mcfield"  },
	{ avatar: "../../assets/images/avatars/3.png", profileImg: "../../assets/images/avatars/profile.png", shortDesc: "8 VIDEOS", title:"Kevin Mcfield"  },
	{ avatar: "../../assets/images/avatars/4.png", profileImg: "../../assets/images/avatars/profile.png", shortDesc: "8 VIDEOS", title:"Kevin Mcfield"  },
	{ avatar: "../../assets/images/avatars/5.png", profileImg: "../../assets/images/avatars/profile.png", shortDesc: "8 VIDEOS", title:"Kevin Mcfield"  },
    { avatar: "../../assets/images/avatars/6.png", profileImg: "../../assets/images/avatars/profile.png", shortDesc: "8 VIDEOS", title:"Kevin Mcfield"  },];
    return(

<main>   
	
	<Features></Features>

	<div className="container index-3-categories text-center">	
		<div className="row">
			<div className="col-sm-10 col-sm-offset-1">
				<h3>Explore Bromine Video Platform</h3>
				<p>
					At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
					no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, coniam voluptua.
				</p>
			</div>
		</div>
		<div className="row text-center">
			<div className="col-md-4 col-sm-6">
				<div className="category-with-bg cat1">
					<h5>Content-Management-Systems(CMS)</h5>
					<p>IT-Service for CMS like WordPress</p>
					<a href="index3.html#" className="goto"><i className="zmdi zmdi-long-arrow-right"></i></a>
				</div>
			</div>
			<div className="col-md-4 col-sm-6">
				<div className="category-with-bg cat2">
					<h5>User Experience / UX Design</h5>
					<p>Workshop for UX Design</p>
					<a href="index3.html#" className="goto"><i className="zmdi zmdi-long-arrow-right"></i></a>
				</div>
			</div>
			<div className="col-md-4 col-sm-6">
				<div className="category-with-bg cat3">
					<h5>Typography &amp; Writing</h5>
					<p>Work with InDesign</p>
					<a href="index3.html#" className="goto"><i className="zmdi zmdi-long-arrow-right"></i></a>
				</div>
			</div>
			<div className="col-md-4 col-sm-6"> 
				<div className="category-with-bg cat4">
					<h5>Digital Publication</h5>
					<p>Learn how to publish online</p>
					<a href="index3.html#" className="goto"><i className="zmdi zmdi-long-arrow-right"></i></a>
				</div>
			</div>
			<div className="col-md-4 col-sm-6">
				<div className="category-with-bg cat5">
					<h5>Layouts for Print Design</h5>
					<p>Illustrations for Print</p>
					<a href="index3.html#" className="goto"><i className="zmdi zmdi-long-arrow-right"></i></a>
				</div>
			</div>
			<div className="col-md-4 col-sm-6">
				<div className="category-with-bg cat6">
					<h5>Digital Marketing (SEO)</h5>
					<p>Tutorial to use Search Engines</p>
					<a href="index3.html#" className="goto"><i className="zmdi zmdi-long-arrow-right"></i></a>
				</div>
			</div>
		</div>
	</div>

<Professionals prosList={prosList}></Professionals>

	<div className="container popular">
		<div className="row">
			<div className="col-sm-12 text-center">
				<h3>Popular online tutorials</h3>
				<div className="scrolldown-placeholder">
					<a href="index3.html#" className="popular-scrolldown"><i className="zmdi zmdi-chevron-down zmdi-hc-lg"></i></a>
				</div>
			</div>
		</div>
		<div className="row tutorials">
			<div className="col-md-4">
				<div className="tutorial">
					<img src="assets/images/popular/1.jpg" className="resp-img" alt="Tutorial"/>
					<div className="tutorial-details">
						<h6>How to become an UX Designer</h6>
						<p><span className="lessons"><i className="zmdi zmdi-assignment"></i>12 LESSONS</span><span className="duration"><i className="zmdi zmdi-time"></i>3:15h</span></p>
						<p className="abs">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
						<a href="index3.html#" className="greybutton">VIEW COURSE</a>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="tutorial">
					<img src="assets/images/popular/2.jpg" className="resp-img" alt="Tutorial"/>
					<div className="tutorial-details">
						<h6>8 steps to your own startup</h6>
						<p><span className="lessons"><i className="zmdi zmdi-assignment"></i>8 LESSONS</span><span className="duration"><i className="zmdi zmdi-time"></i>4:32h</span></p>
						<p className="abs">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
						<a href="index3.html#" className="greybutton">VIEW COURSE</a>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="tutorial">
					<img src="assets/images/popular/3.jpg" className="resp-img" alt="Tutorial"/>
					<div className="tutorial-details">
						<h6>Business communication for marketers</h6>
						<p><span className="lessons"><i className="zmdi zmdi-assignment"></i>15 LESSONS</span><span className="duration"><i className="zmdi zmdi-time"></i>6:04h</span></p>
						<p className="abs">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
						<a href="index3.html#" className="greybutton">VIEW COURSE</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="container-fluid signup text-center">
		<div className="row">
			<div className="col-sm-12">
				<p>ONLINE LEARNING FROM EVERYWHERE</p>
				<h4>Are you ready to start learning?</h4>
				<a href="index3.html#" className="bluebutton">SIGN UP TODAY</a>
			</div>
		</div>
	</div>

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

	<div className="container whyus">
		<div className="row text-center">
			<div className="col-sm-12">
				<h3>Why to choose us</h3>
			</div>
		</div>
		<div className="row">
			<div className="col-md-4">
				<h6>More than 1000+ video tutorials in our library</h6>
				<p>
					Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
					nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in 
					vulputate velit esse molestie consequat.
				</p>
			</div>
			<div className="col-md-4">
				<h6>Learn form our professional teachers </h6>
				<p>
					Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
					nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in 
					vulputate velit esse molestie consequat.
				</p>
			</div>
			<div className="col-md-4">
				<h6>Become an expert in your business</h6>
				<p>
					Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
					nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in 
					vulputate velit esse molestie consequat.
				</p>
			</div>
		</div>
	</div>




</main>
);}

export default Main;