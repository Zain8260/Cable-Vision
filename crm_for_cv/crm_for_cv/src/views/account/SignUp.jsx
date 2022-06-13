import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import {auth} from '../../config'
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

class SignUpView extends Component {
  onSubmit = async (values) => {
    auth.createUserWithEmailAndPassword(values.mobileNo, values.password)
    .then((res) => {
      localStorage.setItem("email",values.mobileNo)
      window.location.href = "/";
    })
    .catch(error => console.log(error))
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
            <Link to="/">
              <img
                src="../../images/banner/Dell.webp"
                alt="..."
                className="img-fluid"
              />
            </Link>
            <Link to="/">
              <img
                src="../../images/banner/Laptops.webp"
                alt="..."
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="col-md-6 p-3">
            <h4 className="text-center">Sign Up</h4>
            <SingUpForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpView;
