import { useState } from "react";
import '../css/Contact.css';
import placeholder from '../assets/techImage.jpg';

function Contact() {

    const formInitialDetails = {
        first: "",
        last: "",
        email: "",
        phone: "",
        message: "",
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result = await response.json();
        setFormDetails(formInitialDetails);

        console.log(result.code);

        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully" })
            alert("Message sent successfully")
        } else {
            setStatus({ success: false, message: "Something went wrong" })
            alert("Something went wrong")
        }
    }

    return (
        <div className="contact-container">
            <h1 className="main-title">Get in Touch</h1>
            <div className="general-contact-area">
                <img src={placeholder} alt="placeholder" />
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="text-fields">
                        <input type="text" placeholder="First Name" id="fname" name="fname" className="text-field" 
                        value={formDetails.first} onChange={(e) => onFormUpdate('first', e.target.value)}></input>
                        <input type="text" id="lname" name="lname" placeholder="Last Name" className="text-field"
                        value={formDetails.last} onChange={(e) => onFormUpdate('last', e.target.value)}></input>
                        <input type="text" id="email" name="email" placeholder="Email Address" className="text-field"
                        value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                        <input type="text" id="phone-no" name="phone-no" placeholder="Phone No." className="text-field"
                        value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)}></input>
                    </div>
                    <textarea name="message" id="message" placeholder="Message" className="text-area"
                    value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea><br />
                    <button className="send-message" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;