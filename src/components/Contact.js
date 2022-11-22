import React, { useRef } from "react";
import '../css/components/contact.css'
import emailjs from 'emailjs-com'

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, 'uA-6EB5WK_WxXR47o')
            .then((result) => {
                alert("Your email has been sent!")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <div className="form">
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" className="input input-container ic1"/>
                <div className="title">
                    Get in touch!
                </div>
                <div class="input-container ic1">
                    <input id="user_name" class="input" type="text" placeholder=" " name="user_name" />
                    <div class="cut"></div>
                    <label for="user_name" class="placeholder">Name</label>
                </div>

                <div class="input-container ic2">
                    <input id="user_email" class="input" type="text" placeholder=" " name="user_email" />
                    <div class="cut"></div>
                    <label for="user_email" class="placeholder">Email</label>
                </div>

                <div class="input-container ic2">
                    <textarea id="message" class="inputTextArea input" type="textarea" placeholder=" " name="message"></textarea>
                    <div class="cut cut-short"></div>
                    <label for="message" class="placeholder">Message</label>
                </div>

                {/* <label>Name</label>
                <input type="text" name="user_name" className="input input-container ic2"/>
                <label>Email</label>
                <input type="email" name="user_email" className="input input-container ic3"/>
                <label>Message</label>
                <textarea name="message"></textarea> */}
                <input type="submit" value="Send" className="submit" />
            </form>
        </div>
    )
}
{/* <div class="form">
<div class="title">Welcome</div>
<div class="subtitle">Let's create your account!</div>
<div class="input-container ic1">
  <input id="firstname" class="input" type="text" placeholder=" " />
  <div class="cut"></div>
  <label for="firstname" class="placeholder">First name</label>
</div>
<div class="input-container ic2">
  <input id="lastname" class="input" type="text" placeholder=" " />
  <div class="cut"></div>
  <label for="lastname" class="placeholder">Last name</label>
</div>
<div class="input-container ic2">
  <input id="email" class="input" type="text" placeholder=" " />
  <div class="cut cut-short"></div>
  <label for="email" class="placeholder">Email</>
</div>
<button type="text" class="submit">submit</button>
</div> */}