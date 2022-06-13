import React, { Component, lazy } from "react";
import { ReactComponent as IconAlertTriangleFill } from "bootstrap-icons/icons/exclamation-triangle-fill.svg";
const Search = lazy(() => import("../../components/Search"));
const CheckoutForm = lazy(() => import("../../components/CheckoutForm"));

class FormView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <CheckoutForm/>
    );
  }
}

export default FormView;
