import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  const [email,setEmail] = useState('')
  useEffect(()=>{
    // localStorage.removeItem("email")
    var email =  localStorage.getItem("email");
    setEmail(email)
    // alert(email)
  },[])
 const Signout = () => {
    localStorage.removeItem("email")
    
    window.location.href = "/";
  }
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Cable Vision
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle font-weight-bold"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                 Home
                </button>
                
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                <div className='navbar navbar-expand-lg p-0' style={{flexDirection:'row'}}>
                <div >
                <li >
                   <h3 className="dropdown-item">Internet</h3>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                     Home Packages
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/notification">
                      Unlimited Bundle
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  
                  <li>
                    <Link className="dropdown-item" to="/SimpleMap">
                      Coverage Area
                    </Link>
                  </li>
                 

                  {/* <li>
                    <Link className="dropdown-item" to="/contact-us">
                      Apply for advertisement
                    </Link>
                  </li> */}
                
                  <li>
                    <Link className="dropdown-item" to="/blog/detail">
                      Blog 
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact-us">
                     Contact Us                    </Link>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li */}
                  {/* <li> */}
                    {/* <Link className="dropdown-item" to="/fsafasf">
                      404 Page Not Found
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                      500 Internal Server Error
                    </Link>
                  </li> */}
                  </div>
                  
                  <div >
                <li style={{marginTop:8}} >
                   <h3 className="dropdown-item">Cable TV</h3>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/checkout">
                     Basic Cable
                    </Link>
                  </li>
                 
                  <li>
                    <Link className="dropdown-item" to="/checkout">
                     Digital Box
                    </Link>

                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="/blog/detail">
                     Customer Support
                    </Link>
                  </li> */}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/checkout">
                      Joy Box
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact-us">
                      Joy App
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                    TV Size and Cable Tv Selection Guide                  </Link>
                  </li>
                  <li> 
                    <Link className="dropdown-item" to="/blog/detail">
                     Upfront Charges
                    </Link>
                  </li>
                 
                
                  {/* <li>
                    <Link className="dropdown-item" to="/fsafasf">
                     Joy for Smart Phones
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                     Channel List
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link className="dropdown-item" to="/500">
                     Apply Now
                    </Link>
                  </li> */}
                   <li>
                    <Link className="dropdown-item" to="/account/signin">
                
                    </Link>
                  </li>
                  </div><div >
                <li style={{marginTop:-15}} >
                   <h3 className="dropdown-item">Marketing</h3>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                   Advertisement Package
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signup">
                      Phone App
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li style={{marginBottom:80}}>
                    <Link className="dropdown-item" to="/checkout">
                      Payments
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="/contact-us">
                      NGN Telephony HandBook
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                     Voice Call Tariff                  </Link>
                  </li> */}
                  {/* <li>
                    <Link className="dropdown-item" to="/blog">
                     Voice Call Tariff                  </Link>
                  </li> */}
                  {/* <li>
                    <Link className="dropdown-item" to="/blog/detail">
                     Incoming/Outgoing Call Rewards
                    </Link>
                  </li> */}
                 
                 
                  {/* <li>
                    <Link className="dropdown-item" to="/fsafasf">
                      Upfront Charges
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                      Apply Now
                    </Link>
                  </li> */}
                  </div>
     </div>
                 
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle font-weight-bold"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                 Support
                </button>
                
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                <div className='navbar navbar-expand-lg p-0' style={{flexDirection:'row'}}>
                <div >
                <li >
                   <h3 className="dropdown-item">Customer Support</h3>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                    Customer Panel
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signup">
                      Cabling Guide
                    </Link>
                  </li>
                  
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/checkout">
                      Reward Points 
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact-us">
                      Latest Offers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                     Loyalty Points                 </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog/detail">
                      Add Your Story
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fsafasf">
                      Manuals
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                      Security Advisiories
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                      FAQS
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                     Email
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                     Customers Feedback
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                    Contact Us
                    </Link>
                  </li>               
                  </div>
                  
                  <div >
                <li >
                   <h3 className="dropdown-item" style={{marginTop:-250}}>Payment Options</h3>
                  </li>
                  <div className='navbar navbar-expand-lg p-0'>
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                    <img src={'https://nayatel.com/wp-content/uploads/2018/08/meezan.png'}    />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                    <img src={'https://nayatel.com/wp-content/uploads/2019/11/meezan.png'}   />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                    <img src={'https://nayatel.com/wp-content/uploads/2018/08/100-into-100.png'}   />
                    </Link>
                  </li>
                  </div>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/checkout">
                      Joy Box
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact-us">
                      Joy App
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                    TV Size and Cable Tv Selection Guide                  </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog/detail">
                     Upfront Charges
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fsafasf">
                     Joy for Smart Phones
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                     Channel List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fsafasf">
                      Upfront Charges
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                      Apply Now
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link className="dropdown-item" to="/500">
                     Apply Now
                    </Link>
                  </li> */}
                  </div><div >
                {/* <li >
                   <h3 className="dropdown-item">Referral Reward Program</h3>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                   Mobile Offer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signup">
                      Phone App
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/checkout">
                      Nayatel Phone
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact-us">
                      NGN Telephony HandBook
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                     Voice Call Tariff                  </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog/detail">
                     Incoming/Outgoing Call Rewards
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fsafasf">
                      Upfront Charges
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                      Apply Now
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fsafasf">
                      Upfront Charges
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                      Apply Now
                    </Link>
                  </li> */}
                  </div>
     </div>
                 
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Support
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/SimpleMap">
                  Coverage Areas
                </Link>
              </li>
              <li className="nav-item"> 
              {
                email == null ?<Link className="nav-link" to="/account/signin">
                My Account
              </Link> : <Link className="nav-link" to="/account/signin">
                  {email}
                </Link>
              }
                
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Furniture
                </Link>s
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Garden & Outdoors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Jewellery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/documentation">
                  Documentation
                </Link>
              </li> */}
              { email != null ?  <Link className="nav-link" to="/" onClick={()=>Signout()}>
                  Sign Out
                </Link> : null
}
            </ul>
            
          </div>
         
        </div>
        
      </nav>
    </React.Fragment>
  );
};

export default TopMenu;
