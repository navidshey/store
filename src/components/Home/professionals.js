/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Professionals = ({ prosList }) => {
  return (
    <div className="container pros">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 text-center">
          <h3>Check some of our professionals</h3>
          <p>
					At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
					no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, coniam voluptua.
          </p>
          <a href="/professionals" className="blueplay">CHECK ALL TEACHERS</a>
        </div>
      </div>
      <div className="row text-center">
        { prosList.map((item, index) => {
          return (
            <div className="col-md-2 col-sm-4 col-xs-6" key={index} >
              <div className="teacher">
                <div className="imgcontainer">
                  <img src={process.env.PUBLIC_URL + item.avatar} alt="Avatar" />
                  <div className="overlay">
                    <img src={process.env.PUBLIC_URL + item.profileImg} alt="Profile" />
                    <p>{item.shortDesc}</p>
                  </div>
                </div>
                <Link to="/profession">{item.title}</Link>
                <p>{item.skill}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Professionals
