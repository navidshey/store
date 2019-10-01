import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  
            total: props.total,
            url: props.url,
            current: (!props.current || props.current == 0) ? 0 : props.current
        }
    }

    handlePageClick =(i)=>{
        this.setState({
            current : i
        });
        this.props.callback(i+1);
    }

    render() {
        return (
            <div className="row text-center">
                <div className="col-xs-12">
                    <div className="paginations">
                        <Link className="prev" to="/courses">
                            <FontAwesomeIcon icon="chevron-left" size="1x" />
                            PREV
                        </Link>
                        {
                            [...Array(this.state.total)].map((e, i) => {
                                return (
                                    // <Link to={this.state.url + "/" + i+1} onClick={()=> this.handlePageClick(i)} key={i} className={this.state.current == i ? "current" : ""}>{i + 1}</Link>
                                    <div onClick={()=> this.handlePageClick(i)} key={i} className={this.state.current == i ? "current" : ""}>{i + 1}</div>
                                )
                            })
                        }
                        <Link className="next" to="/courses">NEXT
                    <FontAwesomeIcon icon="chevron-right" size="1x" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Pagination.defaultProps = {
    total: 5,
    current: 0,
    url: "/courses"
};

Pagination.propTypes = {
    total: PropTypes.number,
    current: PropTypes.number,
    url: PropTypes.string,
    callback: PropTypes.func
}

export default Pagination;