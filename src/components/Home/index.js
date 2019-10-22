/* eslint-disable no-unused-vars */

import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import general from '../../utils/general'
import HeaderText from '../Header/HeaderText'
import HeaderImage from '../Header/HeaderImage'

class Home extends React.Component {
  componentDidMount () {
    general.removeClassFromElement('body', 'page')
    general.addClassToElement('body', 'homepage')

    ReactDOM.render(<HeaderText></HeaderText>, document.getElementById('slider-text'))
    ReactDOM.render(<HeaderImage></HeaderImage>, document.getElementById('slider-images'))
  }

  componentWillUnmount () {
    general.removeClassFromElement('body', 'homepage')
    general.addClassToElement('body', 'page')
    ReactDOM.unmountComponentAtNode(document.getElementById('slider-text'))
    ReactDOM.unmountComponentAtNode(document.getElementById('slider-images'))
  }

  render () {
    return (

      <Main></Main>

    )
  }
}

export default Home
