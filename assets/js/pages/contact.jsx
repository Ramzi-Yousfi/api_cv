import React from 'react';
import emailjs from 'emailjs-com';
import {useState} from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_xn1k4bc', 'template_h3j6a0x', e.target, 'user_ht3kbUDGYP8FWgoYIdQLU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const [value, setValue] = useState()
    return (
        <div className="container-fluid contact">
            <div className="row">
                <div className="col-md-6 contact-externe">
                    <div className="line"></div>
                    <div className="logo">
                        <img className="logo1" src="./upload/LinkedIn.png" alt=""/>
                        <img className="logo1" src="./upload/discord.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 form_contact">
                    <form onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label>Name</label>
                        <input className="form-control" type="text" name="name" required={true}/>
                        <label>Compnany</label>
                        <input className="form-control" type="text" name="company"/>
                        <label>Phone</label>
                        <PhoneInput
                            className="form-control"
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                            name="phone"/>
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" required={true}/>
                        <label>Message</label>
                        <textarea className="form-control" name="message" required={true}/>
                        <input className="btn btn-dark mt-3 button " type="submit" value="contacter"/>
                    </form>
                </div>
            </div>
        </div>
    );
}