/* eslint-disable no-unused-vars */
import React from 'react'
import CategoryApi from '../../api/categoryApi'
import TeacherApi from '../../api/teacherApi'
import SimpleList from '../Elements/CompoBox/SimpleList'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [],
      teachers: [],
      keyword: '',
      category: null,
      teacher: null
    }
    this.handleSearchCourses = this.handleSearchCourses.bind(this)
  }

  componentDidMount () {
    CategoryApi.getSearchItem()
      .then(list => this.setState({
        categories: list
      }))
    TeacherApi.getSearchItem()
      .then(list => this.setState({
        teachers: list
      }))
  };

  handleSearchCourses (event) {
    this.setState({
      category: event.target.category.value,
      teacher: event.target.teacher.value
    })
    // call search service
    event.preventDefault()
  };

  render () {
    return (
      <form onSubmit={this.handleSearchCourses}>
        <div className="row toolbar">
          <div className="col-md-4 col-sm-6 col-xs-12 select-categories">
            <SimpleList name="category" title="Choose a category" list={this.state.categories} ></SimpleList>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 select-numofvids">
            <SimpleList name="teacher" title="Choose a teacher" list={this.state.teachers} ></SimpleList>
          </div>
          <div className="col-sm-6 col-xs-12 text-keywords">
            <input className="keywords" name="keywords" type="text" placeholder="keywords" />
          </div>
          <div className="col-sm-6 col-xs-12 search-button">
            <button className="search-teachers" type="submit">SEARCH</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Search
