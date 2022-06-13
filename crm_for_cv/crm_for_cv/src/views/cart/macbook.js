import React, { Component, lazy, useState } from "react";
import apple from '../pages/Apple.webp'
import StripeContainer from "../../components/stripepayments/StripeContainer";
import { ReactComponent as IconBugFill } from "bootstrap-icons/icons/bug-fill.svg";

function Testpayment ()
{

    const [showItem,setShowItem] = useState(false)
    return (

<div className="macbook">
<h2>This is a test for payment</h2>
<br/>
<br/>
          {showItem ? <StripeContainer/> :<> <h3>$500.00</h3><img src={apple} alt="Macbook" /><button onClick = {()=> setShowItem(true)}>Purchase Macbook</button></>}
          </div>


    );
}
export default Testpayment;







