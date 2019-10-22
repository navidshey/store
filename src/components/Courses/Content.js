/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import courseApi from '../../api/courseApi'
import PropTypes from 'prop-types'

class Content extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.id,
      openedIndex: 0,
      list: []
    }

    this.handleRowClicked = this.handleRowClicked.bind(this)
  }

  componentDidMount () {
    courseApi.getTitles(1)
      .then(item =>
        this.setState({
          list: item.list
        })
      )
  }

  handleRowClicked (index) {
    if (this.state.openedIndex !== index) {
      this.setState({
        openedIndex: index
      })
    }
  }

  render () {
    return (
      <>
        <ul className="course-accordion">
          {
            this.state.list.map((item, index) => {
              return (
                <li className={this.state.openedIndex == index ? 'accordion-option opened' : 'accordion-option'}
                  onClick={() => this.handleRowClicked(index)}>
                  <div className="option-title">Section #1: {item.title} <span>({item.subList.length} videos)</span></div>
                  <div className="option-wrapper">
                    <ul className="option-items">
                      {
                        item.subList.map((subItem) => {
                          return (
                            <li className="option-item" >
                              <div className="pull-right">
                                <span className="duration">{subItem.hour}</span>
                                <Link to={subItem.link}><i className="zmdi zmdi-star"></i></Link>
                              </div>
                              <Link to={subItem.link}>{subItem.subTitle}</Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </li>

              )
            })}
        </ul>
      </>
    )
  }
}

Content.defaultProps = {
  id: 1
}

Content.propTypes = {
  id: PropTypes.number
}

export default Content
