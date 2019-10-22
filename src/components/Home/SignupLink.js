/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const SignupLink = ({ props }) => {
  return (
    <div className="container-fluid signup text-center">
      <div className="row">
        <div className="col-sm-12">
          <p>ONLINE LEARNING FROM EVERYWHERE</p>
          <h4>Are you ready to start learning?</h4>
          <Link to="/signup" className="bluebutton">SIGN UP TODAY</Link>
        </div>
      </div>
    </div>
  )
}
export default SignupLink
