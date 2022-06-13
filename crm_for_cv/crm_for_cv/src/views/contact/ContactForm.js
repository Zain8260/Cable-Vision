import React from 'react';
import emailjs from 'emailjs-com'
import ContactImg from './contact.png'

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; 

const ContactForm = () => {

    // toast.configure();
    // const  addToast  = () =>
    // {
    //     toast("You're good to go ");
    // }
    function sendEmail(e)
    {
e.preventDefault();
emailjs.sendForm('service_fyj5cpy','template_1kaicra',e.target,'user_sDmAQ34GR8VgDELHlTeXp').then(res =>
    {
        console.log(res);
        
    }).catch(err => console.log(err));

   
    }
    return (

        
        <div className="contact-area pb-50">
            <div className="container">
           
                <div className="section-title">
                    <span className="sub-title">Get in Touch</span>
                   
                    <h2>Ready to Get Started? <span className="overlay"></span></h2>
                    <p>Get in touch with our team of advertisers</p>
                    
                </div>

                <div className="row">
                    {/* <div className="col-lg-4 col-md-4">
                        <div className="contact-image">
                            <img src={ContactImg} alt="Contact" />
                        </div>
                    </div> */}

                    <div className="col-lg-6 col-md-12">


                        <div className="contact-form">
                            <form id="contactForm" onSubmit={sendEmail}>
                            
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Your Name" required className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <input type="text" name="email" placeholder="Your email address" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="number" placeholder="Your phone number" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="subject" placeholder="Your Subject" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="text" cols="30" rows="5" placeholder="Advertisement details" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                    <div className="form-group">



                                    <h4>Choose your package</h4>
                                    <select className="form-control">
  <option  value="banana" > Cable Vision (standard)</option>
  <option value="orange" >Cable Vision (Premium)</option>
  <option value="apple" >Extreme Bundle</option>
  
  
</select>
                                    <h4>Choose advertisement type</h4>
                                    <select className="form-control">
  <option  value="grapefruit" >Entertainment</option>
  <option value="lime" >News</option>
  <option value="coconut" >Fashion</option>
  <option value="mango" >Government</option>
  <option value="none">others</option>
</select>


</div>
</div>
<br/>
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit"  className="btn btn-primary" >Send Message</button>
                                    </div>
                                </div>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactForm;