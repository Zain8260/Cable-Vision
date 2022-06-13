import React, { useState } from 'react'
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import axios from 'axios';

import {CardElement } from '@stripe/react-stripe-js';

export default  class extends React.Component {
  // const [password, setPassword] = useState('')
  // const [passwordConfirm, setPasswordConfirm] = useState('')
  state =  {
    cvc: '',
    message: '',
    expYear: '',
    expMonth: '',
    cardNumber: '',
    formProcess: false,
    amount: ''
  };
 async componentDidMount() {
    this.loadStripe(); 
    var amountt =  await localStorage.getItem("Amount")
    this.setState({amount:amountt})
  }
 
  handleChange = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    });
  }
 
  pay = async (e) => {
 
    e.preventDefault();
    var name  = await localStorage.getItem("Name")

    if(name == null){
      alert("Kindly fill name in first step")
    }
    else {
      this.setState({
        formProcess: true
      });
   
      window.Stripe.card.createToken({
        number: this.state.cardNumber,
        exp_month: this.state.expMonth,
        exp_year: this.state.expYear,
        cvc: this.state.cvc
      }, async(status, response) => {
         
         
        if (status === 200) {
          // const {id}= paymentMethod
          
          this.setState({
            message: `Success! Card token ${response.card.id}.`,
            formProcess: false
          });
          var name  = await localStorage.getItem("Name")
          localStorage.setItem("Amount",100)
          localStorage.setItem("ID",response.card.id)
          var amount =  await localStorage.getItem("Amount")
          console.log("Name=======?",name)
          const responses= await axios.post("http://localhost:4000/payment",
          {
      
      amount:amount,
      id:response.card.id,
      name
      
          })
          if (responses.data.success)
          {
            localStorage.setItem("PaymentSet","true")
      console.log("Successful payments ")
      // setSuccess(true)
      
          }
        } else {
          this.setState({
            message: response.error.message,
            formProcess: false
          });
        }
      });
    }
   
  }
 
 
  loadStripe = () => {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window['Stripe'].setPublishableKey('pk_test_51KKojiDeAFMIypzbvaCafGl90J33Hk9KfPa14XoeDXWKOpvL7yavmYJxPfKAQJYqvPHVSVYRLhg0ysRlZLTezZK100eklRDN7d');
      }
      window.document.body.appendChild(s);
    }
  }
render(){
  return (
   
     <div className="card mb-3 border-info">
            <div className="card-header bg-info">
              <IconCreditCard2Front className="i-va" /> Payment Method
            </div>
            <div className="container">    
        <div className="row">
            <div className="col-xs-12 col-md-8 mr-auto ml-auto">            
                <div className="panel panel-default">
                    <form onSubmit={this.pay}>
                      <div className="panel-body mt-5">
                          <h4>You Are Just One Step Away</h4>    
                          <p><b>{this.state.message}</b></p>
                          <div className="row">
                              <div className="col-xs-12 col-md-12">
                                  <div className="form-group">
                                      <label>CARD NUMBER</label>
                                      <div className="input-group">
                                          <input type="text" className="form-control" placeholder="Valid Card Number" name="cardNumber" maxLength="19" onChange={this.handleChange} />
                                          <span className="input-group-addon"><span className="fa fa-credit-card"></span></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-xs-7 col-md-7">
                                  <div className="form-group">
                                      <label><span className="hidden-xs">EXPIRATION</span> Date</label>
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="form-group">
                                                  <select name="expMonth" className="form-control"  onChange={this.handleChange}>
                                                      <option value="">Select Month</option>
                                                      <option value="1">01</option>
                                                      <option value="2">02</option>
                                                      <option value="3">03</option>
                                                      <option value="4">04</option>
                                                      <option value="5">05</option>
                                                      <option value="6">06</option>
                                                      <option value="7">07</option>
                                                      <option value="8">08</option>
                                                      <option value="9">09</option>
                                                      <option value="10">10</option>
                                                      <option value="11">11</option>
                                                      <option value="12">12</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div className="col-md-6 pull-right">
                                              <div className="form-group">
                                                  <select name="expYear" className="form-control" onChange={this.handleChange}>
                                                      <option value="">Select Year</option>
                                                      <option value="20">2020</option>
                                                      <option value="21">2021</option>
                                                      <option value="22">2022</option>
                                                      <option value="23">2023</option>
                                                      <option value="24">2024</option>
                                                      <option value="25">2025</option>
                                                      <option value="26">2026</option>
                                                      <option value="27">2027</option>
                                                      <option value="28">2028</option>
                                                      <option value="29">2029</option>
                                                      <option value="30">2030</option>                                                
                                                  </select>
                                              </div>
                                          </div>
                                      </div>
                                  </div>                            
                              </div>
                              <div className="col-xs-5 col-md-5 pull-right">
                                  <div className="form-group">
                                      <label>CVV CODE</label>
                                      <input type="text" name="cvv" className="form-control" placeholder="CVC" maxLength="4" onChange={this.handleChange} />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="panel-footer">
                          <div className="row">
                              <div className="col-xs-12 col-md-12">
                                  { (this.state.formProcess)? (
                                      <span className="btn btn-warning btn-lg btn-block">Please wait...</span>
                                    ) : (
                                      <button className="btn btn-warning btn-lg btn-block">Process payment</button>
                                    )}
                              </div>
                          </div>
                      </div>
                  </form>
                  <p className="mt-2">Try it out using the test card number 4242 4242 4242 4242, a random three-digit CVC number and any expiration date in the future.</p>
                </div>
            </div>
        </div>
      </div>
            {/* <div className="card-body">
              <div className="row g-3 mb-3 border-bottom">
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      defaultChecked
                      required
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit card
                      <img
                        src="../../images/payment/cards.webp"
                        alt="..."
                        className="ml-3"
                        height={26}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      PayPal
                      <img
                        src="../../images/payment/paypal_64.webp"
                        alt="..."
                        className="ml-3"
                        height={26}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name on card"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Card number"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Expiration month"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Expiration year"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div> */}
           
            <div className="card-footer border-info">
              <button type="button" className="btn btn-block btn-info">
                Pay Now <strong>Rs {this.state.amount}</strong>
              </button>
             
            </div>
          
          </div>
        
  )
}
}
