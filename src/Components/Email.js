import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wzyx9if', 'template_ja1hbv9', form.current, '3i60xnh2bIpGtUxAg')
      .then(() => {
        alert('Message successfully sent!')
        window.location.reload(false)
      }, () => {
        alert('Failed to send the message, please try again')
      });
  };
  return (
    <div className='container'>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control my-1" id="floatingInput" placeholder="name@example.com" name='from_name' />
          <label for="floatingInput">Your Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control my-1" id="floatingInput" placeholder="name@example.com" name='email' />
          <label for="floatingInput">Your E-mail Address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="subject" className="form-control my-1" id="floatingInput" placeholder="name@example.com" name='subject' />
          <label for="floatingInput">Subject</label>
        </div>
        <div className="form-floating">
          <textarea className="form-control my-1" placeholder="Your Message" id="floatingTextarea2" style={{ height: "100px" }} name='message'></textarea>
          <label for="floatingTextarea2">Your Message</label>
        </div>
        <div className='d-flex justify-content-center' ><button type="submit" className="btn my-2 blk" value="Send"style={{width:"300px",color:"white",border:"whitesmoke 1px solid"}} >Send</button></div>
      </form>
    </div>
  )
}

export default Email