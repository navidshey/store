import React from 'react'
import PropTypes from 'prop-types'
import { Header, Pagination } from '../Page'
import Search from '../Page/Search'
import Tutorials from '../Tutorials'
import TutorialApi from '../../api/tutoralApi'

class CourseList extends React.Component {
  constructor (props, columnNumbers) {
    super(props)
    this.state = {
      columnNumbers: columnNumbers || 3,
      tutorials: [],
      isloading: true,
      total: null,
      current: null,
      url: ''
    }
    this.getList = this.getList.bind(this)
  }

  componentDidMount () {
    this.getList(1)
  };

  getList (from) {
    this.setState({
      isloading: true
    })
    TutorialApi.getList(from)
      .then(list => this.setState({
        tutorials: list.data,
        total: list.total,
        from: from,
        isloading: false
      }))
  };

  render () {
    return (
      <main>
        <Header title="OUR COURSES"></Header>

        <div className="container courses-browse popular">
          <Search></Search>
          { !this.state.isloading && <Tutorials props={this.state.tutorials} columnNumbers={this.state.columnNumbers}></Tutorials>}
          { this.state.isloading && 'loading ..............................................................' }
          {this.state.total && <Pagination total={this.state.total} current={this.state.from} url={this.state.url} callback={this.getList}></Pagination>}
        </div>

      </main>
    )
  }
}

CourseList.defaultProps = {
  columnNumbers: 3
}

CourseList.propTypes = {
  columnNumbers: PropTypes.number
}

export default CourseList
