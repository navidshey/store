import React from 'react'
import { Input, Textarea } from '../Elements/Input'

class Reply extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            website: "",
            message: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
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

    render() {
        return (
            <>
                <h4>LEAVE A REPLY</h4>
                <form className="contact" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <Input name="name" placeholder="enter your name" required={true} type="text" labelClass="req" label="NAME" colNumber="4"></Input>
                        <Input name="email" placeholder="enter e-mail address" required={true} type="text" labelClass="req" label="E-MAIL ADDRESS" colNumber="4"></Input>
                        <Input name="site" placeholder="https://" type="text" required={false} label="WEBSITE" colNumber="4"></Input>
                        {/* <Input name="subject" placeholder="subject"  type="text" required={false} label="SUBJECT" colNumber="4"></Input> */}
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
            </>
        )
    }
}

export default Reply;