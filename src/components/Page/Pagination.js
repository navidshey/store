import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: props.total,
            current: (!props.current || props.current === 0) ? 0 : props.current,
            pageNumbers: []
        }
    }

    componentDidMount() {
        this.calculatePageNumbers(this.state.total);
    }

    handlePageClick = (i) => {
        this.setState({
            current: i
        });
        this.props.callback(i + 1);
    }

    calculatePageNumbers = (total) => {
        let pagenum = [];
        for (let i = 1; i <= Math.ceil(total / 12); i++) {
            pagenum.push(i);
        }
        this.setState({
            pageNumbers: pagenum
        })
    }

    render() {
        return (
            <div className="row text-center">
                <div className="col-xs-12">
                    <div className="paginations">
                        <div onClick={() => this.handlePageClick(this.state.current - 1)} key="prev-key">
                            <FontAwesomeIcon icon="chevron-left" size="1x" />
                            PREV
                            </div>
                        {
                            this.state.pageNumbers.map((number) => {
                                if (number === 1 || number === this.state.total || (number >= this.state.current - 2 && number <= this.state.current + 4)) {
  
                                    return (
                                        <div onClick={() => this.handlePageClick(number)} key={number} className={this.state.current === number ? "current" : ""}>{number}</div>
                                    )
                                }
                            })
                        }
                        <div onClick={() => this.handlePageClick(this.state.current + 1)} key="next-key">
                            NEXT
                    <FontAwesomeIcon icon="chevron-right" size="1x" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Pagination.defaultProps = {
    total: 30,
    current: 1
};

Pagination.propTypes = {
    total: PropTypes.number,
    current: PropTypes.number,
    callback: PropTypes.func
}

export default Pagination;