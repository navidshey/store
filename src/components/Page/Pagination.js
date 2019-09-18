import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Pagination = ({ total, url, current }) => {
    return (
        <div className="row text-center">  
            <div className="col-xs-12">
                <div className="paginations">
                    <Link className="prev" to="/courses">
                    <FontAwesomeIcon icon="chevron-left" size="1x" />
                       PREV
                        </Link>
                    {
                        [...Array(total)].map((e, i) => {
                           return(
                            <Link to={url + "/" + i} key={i} className={current == i && "current"}>{i+1}</Link>
                        )})
                        }
                    <Link className="next" to="/courses">NEXT
                    <FontAwesomeIcon icon="chevron-right" size="1x" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
   
Pagination.defaultProps={
    total: 5,
    current: 2,
    url: "/courses"
};

Pagination.propTypes ={
    total: PropTypes.number,
    current: PropTypes.number,
    url: PropTypes.string
}

export default Pagination;