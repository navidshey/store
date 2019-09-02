import React from 'react'
import feature1 from '../../assets/images/features/feature-2.png'
import feature2 from '../../assets/images/features/feature-3.png'
import feature3 from '../../assets/images/features/feature-4.png'

const Features = ()=>{
    return(
        <div className="container featured text-center">
		<div className="col-md-4"> 
			<div className="feature">
				<div className="img-container-bg">
					<img src={feature1} className="make-center" alt="Feature" />
				</div>
				<h6>Watch it from everywhere</h6>
				<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
				<a href="index3.html#" className="readmore"><span>READ MORE&nbsp;&nbsp;&nbsp;</span><i className="zmdi zmdi-long-arrow-right"></i></a>
			</div>
		</div>
		<div className="col-md-4">
			<div className="feature">
				<div className="img-container-bg">
					<img src={feature2} className="make-center" alt="Feature" />
				</div>
				<h6>Support videos on all devices</h6>
				<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla facilisi.</p>
				<a href="index3.html#" className="readmore"><span>READ MORE&nbsp;&nbsp;&nbsp;</span><i className="zmdi zmdi-long-arrow-right"></i></a>
			</div>
		</div>
		<div className="col-md-4">
			<div className="feature">
				<div className="img-container-bg">
					<img src={feature3} className="make-center" alt="Feature" />
				</div>
				<h6>Learn new skills daily</h6>
				<p>Iconsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
				<a href="index3.html#" className="readmore"><span>READ MORE&nbsp;&nbsp;&nbsp;</span><i className="zmdi zmdi-long-arrow-right"></i></a>
			</div>
		</div>
	</div>
    );
}

export default Features;