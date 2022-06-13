import React from "react";
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import PaymentForm from "./PaymentForm";


const PUBLIC_KEY="pk_test_51JizkuLnX7U0tZvdXRtHfmo2aN6HVdLNTBm33PuTitLqHJw67IzEFn964AOelhfvuhPPMezSl6Amj6V4SsUDM8gV009LJsBL8s"
const stripeTestPromise= loadStripe(PUBLIC_KEY)


export default function StripeContainer()
{
return (

<Elements stripe={stripeTestPromise}>

<PaymentForm/>



</Elements>





)




}