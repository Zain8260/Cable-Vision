import React, { useState } from 'react'
import Collapsible from 'react-collapsible';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faApple,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default () => {
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const group2 =(
    <div className="col-sm-3">
             <button className="btn btn-primary" 
    type="button">Internet</button>
    
     
            
           </div>
    )
    const group3 =(
      <div className="col-sm-3">
               <button className="btn btn-primary" 
      type="button">CableTv</button>
              
             </div>
      )
      const group4 =(
        <div className="col-sm-3">
                 <button className="btn btn-primary" 
        type="button">Marketing</button>
                
               </div>
        )
        const group5 =(
          <div className="col-sm-3">
                   <button className="btn btn-primary" 
          type="button">Value Added Service</button>
                  
                 </div>
          )
  return (
    <>
    <Collapsible trigger={group2} style={{color:'#323232'}}>
    <ul class="list-group">
  <li class="list-group-item" >student package <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li>
<li class="list-group-item" >Home Package <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li>
          <li class="list-group-item" >Unlimited <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li>
</ul>
    
  </Collapsible>
  <Collapsible trigger={group3}>
  <ul class="list-group">
  <li class="list-group-item" >Basic Cable <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li>
<li class="list-group-item" >Digital Box <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li>
       
</ul>
  </Collapsible>
  <Collapsible trigger={group4}>
  <ul class="list-group">
  <li class="list-group-item" >Advertisement <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li>
{/* <li class="list-group-item" >Cras justo odio <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li>
          <li class="list-group-item" >Cras justo odio <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li> */}
</ul>
  </Collapsible>
  <Collapsible trigger={group5}>
  {/* <ul class="list-group">
  <li class="list-group-item" >Cras justo odio <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li>
<li class="list-group-item" >Cras justo odio <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li>
          <li class="list-group-item" >Cras justo odio <button className="btn btn-danger" 
          type="button">Value Added Service</button> </li>
</ul> */}
  </Collapsible>

  </>
  )
}
