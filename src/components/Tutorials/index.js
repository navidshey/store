import React from 'react'
import { Link } from 'react-router-dom'
import general from '../../utils/general'

const Tutorials = ({ props, columnNumbers = 3 }) => {
    let colStyle = general.getColumnsStyle(columnNumbers);

    return (
        <div className="row tutorials">
            {props.map((item, index) => {
                return (
                    <div className={colStyle} key={index}>
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
    )
}
export default Tutorials;