import React, { useState } from 'react'
import {firestore} from '../../config'
export default () => {
  const [checked, setChecked] = useState('')
  const activateLasers = async() => {
    
  var payment =  localStorage.getItem("PaymentSet")
  if(payment == null){
    alert("Please fill all the forms and complete payments")
  }
  else if(checked != "on"){
    alert("Kindly press on accept box")
  }
  else {
    var name  = await localStorage.getItem("Name")
    var amount =  localStorage.getItem("Amount")
  var id =   localStorage.getItem("ID")
  var object={
   name:name,
   amount,
   id
 }
firestore.collection("SubscribedUsers").add(object)
alert("User succesfully subscribed")
  }
  
 
  }
  return (
    <div>
      <div className='row'>
        <div className='ten columns terms'>
          <span>By clicking "Accept" I agree that:</span>
          <ul className='docs-terms'>
            <li>
              I have read and accepted the <a href='#'>User Agreement</a>
            </li>
            <li>
              I have read and accepted the <a href='#'>Privacy Policy</a>
            </li>
            <li>I am at least 18 years old</li>
          </ul>
          <label>
            <input
              type='checkbox'
              //   defaultChecked={this.state.checked}
              checked={checked}
              onChange={e => setChecked(e.target.value)}
              autoFocus
            />
            <span> Accept </span>{' '}
          </label>
          <div className="card-footer border-info">
              <button type="button"  onClick={()=>activateLasers()} className="btn btn-block btn-info">
               Done 
              </button>
             
            </div>
        </div>
      </div>
    </div>
  )
}
