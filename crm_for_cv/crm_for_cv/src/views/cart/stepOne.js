import React, { useState } from 'react'
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import {firestore} from '../../config'
export default () => {
  const [firstName, setFirstName] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const activateLasers = () => {
    alert(country)
   var object={
     name:firstName,
     address:address,
     country:country,
     state:state,
     zip:zip
   }
   firestore.collection("PersonalInfo").add(object)
  }
  
  const Name = (txt) => {
   setFirstName(txt)
   localStorage.setItem("Name",txt)
  }
  return (
    <React.Fragment>
    <div className="bg-secondary border-top p-4 text-white mb-3">
      <h1 className="display-6">Customer details & Payments </h1>
    </div>
    <div className="container mb-3">
      <div className="row">
        <div className="col-md-12">
        
         

          <div className="card mb-3" >
            <div className="card-header">
              <IconReceipt className="i-va" />  Address
             
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    
                    onChange={((text)=>Name(text.target.value))}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Addresss"
                    onChange={((text)=>setAddress(text.target.value))}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address 2 (Optional)"
                  />
                </div>
                <div className="col-md-4">
                  <select className="form-select" required  onChange={((text)=>setCountry(text.target.value))}> 
                    <option value>-- Country --</option>
                    <option>Pakistan</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select" required onChange={((text)=>setState(text.target.value))}>
                    <option value>-- State --</option>
                    <option>Punjab</option>
                    <option>Sindh</option>
                    <option>Balochistan</option>
                    <option>Khyber Pakhtunkwa</option>
                  </select>
                </div>
               
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip"
                    onChange={((text)=>setZip(text.target.value))}
                    required
                  />
                </div>
                <div className="col-md-4">
                <button className="btn btn-primary" 
    type="button" style={{width:150}} onClick={()=>activateLasers()}>Save</button> 

                </div>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  </React.Fragment>
  )
}
