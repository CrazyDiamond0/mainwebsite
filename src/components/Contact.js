import React from 'react'
import {Container} from 'react-bootstrap'

export default function Contact(){
    return(
        <div className="contact-form">
            <div id="contact" className=" container ">
            <form method="post">
                <h3>Drop Us a Message</h3>
                <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                    <input type="text" name="txtName" className="form-control" placeholder="Your Name *" defaultValue />
                    </div>
                    <div className="form-group">
                    <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" defaultValue />
                    </div>
                    <div className="form-group">
                    <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" defaultValue />
                    </div>
                    <div className="form-group">
                    <input type="submit" name="btnSubmit" className="btnContact" defaultValue="Send Message" />
                    </div>
                </div>
                <div className="col-md-6  textareacontact">
                    <div className="form-group">
                    <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: '100%', height: '150px'}} defaultValue={""} />
                    </div>
                </div>
                </div>
            </form>
            </div>
        </div>
    )



}