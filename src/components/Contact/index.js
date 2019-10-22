/* eslint-disable no-unused-vars */
import React from 'react'
import { Input, Textarea } from '../Elements/Input'
import { Header } from '../Page'
import general from '../../utils/general'

class contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      website: '',
      subject: '',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount () {
    general.changeIdByElement('body', 'contact')
  }

  handleSubmit (event) {
    console.log('submit')
    this.setState({
      name: event.target.name.value,
      email: event.target.email.value,
      website: event.target.site.value,
      subject: event.target.subject.value,
      message: event.target.message.value
    })
    event.preventDefault()
  }

  handleInputChange (event) {
    // validation can happen here
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <main>
        <Header title="CONTACT"></Header>
        <div className="container success">
          <h4>GET IN TOUCH WITH US</h4>
          <form className="contact" onSubmit={this.handleSubmit}>
            <div className="row">
              <Input handleChange={this.handleInputChange} name="name" placeholder="enter your name" required={true} type="text" labelClass="req" label="NAME" colNumber="4"></Input>
              <Input name="email" placeholder="enter e-mail address" required={true} type="text" labelClass="req" label="E-MAIL ADDRESS" colNumber="4"></Input>
              <Input name="site" placeholder="https://" type="text" required={false} label="WEBSITE" colNumber="4"></Input>
              <Input name="subject" placeholder="subject" type="text" required={false} label="SUBJECT" colNumber="4"></Input>
            </div>
            <div className="row">
              <Textarea name="message" placeholder="type in a message" required={true} label="MESSAGE" labelClass="req" colNumber="1"></Textarea>
            </div>
            <div className="row clearfix">
              <div className="col-sm-12">
                <div className="pull-right">
                  <button type="submit" className="greybutton">SUBMIT</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    )
  }
};

export default contact
