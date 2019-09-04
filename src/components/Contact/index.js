import React from 'react'
import Input from '../Elements/Input'

class contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            website: "",
            subject: "",
            message: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        debugger;
        console.log("submit");
        this.setState({
            name: event.target["name"].value,
            email: event.target["email"].value,
            website: event.target["site"].value,
            subject: event.target["subject"].value,
            message: event.target["message"].value
        })
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        return (
            <main>
                <div className="page-heading text-center">
                    <div className="container">
                        <h2>CONTACT</h2>
                    </div>
                </div>
                <div className="container success">
                    <h4>GET IN TOUCH WITH US</h4>
                    <form className="contact" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <Input name="name" placeholder="enter your name" required="true" type="text" labelClass="req" label="NAME" colNumber="4"></Input>
                            {/* <div className="col-sm-3">
                                <label className="req">NAME</label>
                                <input type="text" name="name" placeholder="enter your name" required />
                            </div> */}
                            <div className="col-sm-3">
                                <label className="req">E-MAIL ADDRESS</label>
                                <input type="text" name="email" placeholder="enter e-mail address" required />
                            </div>
                            <div className="col-sm-3">
                                <label>WEBSITE</label>
                                <input type="text" name="site" placeholder="https://" />
                            </div>
                            <div className="col-sm-3">
                                <label>SUBJECT</label>
                                <input type="text" name="subject" placeholder="subject" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <label className="req">MESSAGE</label>
                                <textarea name="message" placeholder="type in a message" required></textarea>
                            </div>
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

export default contact;