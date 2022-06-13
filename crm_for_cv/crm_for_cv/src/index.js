import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
//import {loadStripe} from '@stripe/stripe-js'

import { Provider } from "react-redux";
import rootReducer from "./reducers";
 import { loadState, saveState } from "./localStorage";


const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

// const express =require ("express");
// const app= express()
// require("dotenv").config()

//  const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)

// const bodyParser =require("body-parser")
// const cors=require("cors")




// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

// app.use(cors())


// app.post("/payment", cors(), async (req,res)=>{
//   let {amount,id} =req.body

//   try {
//     const payment= await stripe.paymentIntents.create({
//       amount,
//       currency:"USD",
//       description:"Cable Vision",
//       payment_method: id,
//       confirm: true
//     })
//     console.log("Payment",payment)
//     res.json({
//       message: "Payment Successful",
//       success: true
//     })
    
//   } catch (error) {
//     console.log("Error",error)
//     res.json({
//       message: "Payment failed",
//       success: false
//     })
    
//   }
// } )

// app.listen(process.env.PORT || 4000, ()=> {
//   console.log("Server is listening on Port 4000")
// })






store.subscribe(() => {
  saveState(store);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
    
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
