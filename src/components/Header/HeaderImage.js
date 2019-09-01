import React from 'react'
import slider1 from '../../assets/images/header-slider/slide-1.jpg'
import slider2 from '../../assets/images/header-slider/slide-2.jpg'
import slider3 from '../../assets/images/header-slider/slide-3.jpg'

const HeaderImage = () =>{
return(
    <ul className="rslides-header rslides rslides1" >
                        <li><img src={slider1} className="resp-img" alt="Slide" /></li>
                        <li><img src={slider2} className="resp-img" alt="Slide" /></li>
                        <li><img src={slider3} className="resp-img" alt="Slide" /></li>
                    </ul>
);
}

export default HeaderImage

