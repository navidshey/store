import React from 'react'
import { Link } from 'react-router-dom'

const PopularTutorials = ({props}) => {
    return (

        <div className="container popular">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h3>Popular online tutorials</h3>
                    <div className="scrolldown-placeholder">
                        <Link to="/tutorials" className="popular-scrolldown">
                            <i className="zmdi zmdi-chevron-down zmdi-hc-lg"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row tutorials">
                {props.map((item, index)=>{
                    return(
                        <div className="col-md-4" key={index}>
                        <div className="tutorial">
                            <img src={item.imgLink} className="resp-img" alt="Tutorial" />
                            <div className="tutorial-details">
                                <h6>{item.title}</h6>
                                <p><span className="lessons">
                                    <i className="zmdi zmdi-assignment"></i>{item.shortDesc}</span><span className="duration"><i className="zmdi zmdi-time"></i>{item.duration}</span></p>
                                <p className="abs">{item.desc}</p>
                                <Link to={item.link} className="greybutton">VIEW COURSE</Link>
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}
export default PopularTutorials;