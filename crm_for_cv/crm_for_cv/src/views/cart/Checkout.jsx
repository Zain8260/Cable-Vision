import React, { Component } from "react";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import MultiStep from 'react-multistep'
import './css/custom.css'
import './css/normilize.css'
import './css/skeleton.css'








import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'
import StepFour from './stepFour'


const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> }
]

const prevStyle = {'background': '#33c3f0', 'border-width': '2px'}
const nextStyle = {'background': '#33c3f0',  'border-width': '2px'}

class CheckoutView extends Component {
  constructor(props) {
    super();
    this.state = {};
    localStorage.removeItem("Name")
    localStorage.removeItem("PaymentSet")
  }

  render() {
    return (
      <React.Fragment>
        
        <div className="container mblank-1.5" >
        <MultiStep  activeStep={0} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
        </div>
     </React.Fragment>
    );
  }
}

export default CheckoutView;
