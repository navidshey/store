import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ total = 5, url, current }) => {
    return (
        <div className="row text-center">
            <div className="col-xs-12">
                <div className="paginations">
                    <Link className="prev" href="courses-3-col.html#">
                        <i className="zmdi zmdi-chevron-left"></i>PREV
                        </Link>
                    {
                        [...Array(total)].map((e, i) => {
                            return(
                            <Link to={url + "/" + i} key={i} className={current == i && "current"}>{i}</Link>
                        )})
                        }
                    {/* <a href="courses-3-col.html#">1</a>
                    <a href="courses-3-col.html#">2</a>
                    <a href="courses-3-col.html#">3</a>
                    <a href="courses-3-col.html#">4</a>
                    <a href="courses-3-col.html#">5</a>
                    <a href="courses-3-col.html#">6</a> */}
                    <Link className="next" href="courses-3-col.html#">NEXT
                    <i className="zmdi zmdi-chevron-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Pagination;