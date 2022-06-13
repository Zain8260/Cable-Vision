import { Toast } from "bootstrap/dist/js/bootstrap.bundle";
import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import {auth} from '../../config'
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

class SignInView extends Component {
  constructor(props){
    super(props)
  }
  onSubmit = async (values) => {
    
    alert(JSON.stringify(values));

    auth.signInWithEmailAndPassword(values.mobileNo, values.password).then((res)=>{
      // alert(res)
      localStorage.setItem("email",values.mobileNo)
      window.location.href = "/";
    }).catch(error => {
      alert("Invalid email or password");
      console.error("Error signing in with password and email", error);
    });
    
  };
  render() {
    return (
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
            <Link to="/">
              {/* <img
                src="../../images/banner/Dell.webp"
                alt="..."
                className="img-fluid"
              /> */}
            </Link>
            <Link to="/">
              {/* <img
                src="../../images/banner/Laptops.webp"
                alt="..."
                className="img-fluid"
              /> */}
            </Link>
          </div>
          <div className="col-md-6 p-3">
            <h4 className="text-center">Sign In</h4>
            <SignInForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInView;
