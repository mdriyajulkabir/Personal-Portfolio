import React, { useRef, useState } from 'react';
import './ContactMe.css'
import emailjs from 'emailjs-com';
const ContactMe = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit =(e) =>{
        e.preventDefault()
        emailjs.sendForm('service_bd63vzd', 'template_qzl7mqx', formRef.current, 'user_Jn5j3JHgdNe1LIIKCj1kf')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Let's discuss your project</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                            <i className="fas fa-phone c-icon"></i>+880 1814570861
                            </div>
                        </div>
                        <div className="c-info">
                            <div className="c-info-item">
                            <i className="fas fa-envelope c-icon"></i> mdriyajulkabir@gmail.com
                            </div>
                        </div>
                        <div className="c-info">
                            <div className="c-info-item">
                            <i class="fas fa-map-marker-alt c-icon"></i> Dhaka 1207, Bangladesh
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                            <p className="c-desc">
                                <b>What's your story?</b> Get in touch. Always coding if you right project comes along.
                            </p>
                            <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name" /> <br />
                            <input type="text" placeholder="Subject" name="user_subject" />  <br />
                            <input type="text" placeholder="Email" name="user_email" />
                            <textarea name="message" placeholder="Massage" rows="5"></textarea>
                            <button className='btn'>Submit</button>
                            {done && "Thank You for sharing your message!!"}
                            </form>
                    </div>
                </div>
        </div>
    );
};
export default ContactMe;