import React from 'react'
import { Link } from 'react-router-dom'
import Tutorials from '../Tutorials';

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
            
            <Tutorials props={props} columnNumbers={3}></Tutorials>
        </div>
    );
}
export default PopularTutorials;