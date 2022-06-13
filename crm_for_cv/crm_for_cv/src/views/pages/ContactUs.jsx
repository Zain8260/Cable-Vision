import React, { lazy, Component } from "react";
import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/envelope-fill.svg";
import { ReactComponent as IconHouseFill } from "bootstrap-icons/icons/house-fill.svg";
import { ReactComponent as IconTelephoneFill } from "bootstrap-icons/icons/telephone-fill.svg";
import ContactForm from "../contact/ContactForm"

const ContactUsForm = lazy(() => import("../../components/ContactUsForm"));

class ContactUsView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  render() {
    return (

      <div>
        <ContactForm/>
      </div>
      
      // <div className="container my-3">
      //   <div className="row g-3">
      //     <div className="col-md-8">
      //       <div className="card">
      //         <div className="card-header">
      //           <IconEnvelopeFill className="i-va" /> Send Message
      //         </div>
      //         <div className="card-body">
      //           <ContactUsForm onSubmit={this.onSubmit} />
      //         </div>
      //       </div>
      //     </div>
      //     <div className="col-md-4">
      //       <div className="card mb-3">
      //         <div className="card-header">
      //           <IconHouseFill className="i-va" /> Address
      //         </div>
      //         <div className="card-body">
      //           <h6 className="card-title border-bottom border-dark pb-2">Head Office</h6>
      //           <address>
      //             <strong>Twitter, Inc.</strong>
      //             <br />
      //             Peoples colony faisalabad
      //             {/* <br />
      //             San Francisco, CA 94103
      //             <br /> */}
      //             <IconTelephoneFill className="i-va" />{" "}
      //             <abbr title="Phone">P:</abbr> (123) 456-7890
      //           </address>
      //           <h6 className="card-title border-bottom border-dark pb-2">Development Office</h6>
      //           <address>
      //             <strong>Twitter, Inc.</strong>
      //             <br />
      //             1355 Peoples colony, Faisalabad
      //             <br />
      //             Faisalabad, Pakistan
      //             <br />
      //             <IconTelephoneFill className="i-va" />{" "}
      //             <abbr title="Phone">P:</abbr> (123) 456-7890
      //           </address>
      //         </div>
      //       </div>
      //       <div className="card">
      //         <div className="google-maps">
      //           <iframe
      //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.392761533618!2d73.10273761462793!3d31.403303160056524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226809f32c045f%3A0xa654b53f60949be7!2sCable%20Vision!5e0!3m2!1sen!2s!4v1636694812861!5m2!1sen!2s"
      //             width={400}
      //             height={300}
      //             frameBorder={0}
      //             style={{ border: 0 }}
      //             allowFullScreen
      //             aria-hidden="false"
      //             tabIndex={0}
      //             title="Location"
      //           />
      //         </div>
      //       </div>
            
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default ContactUsView;
