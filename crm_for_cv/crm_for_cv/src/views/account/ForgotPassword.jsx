import React, { lazy, Component } from "react";
import {auth} from '../../config'
const ForgotPasswordForm = lazy(() =>
  import("../../components/account/ForgotPasswordForm")
);

class ForgotPasswordView extends Component {
  onSubmit = async (values) => {
    auth
      .sendPasswordResetEmail("hananwaqar7@gmail.com")
      .then(() => {
        alert(values)
        // setEmailHasBeenSent(true);
        // setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        // setError("Error resetting password");
      });
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <div className="container my-3">
        <div className="row justify-content-md-center ">
          <div className="col-md-4 p-3 border">
            <h4 className="text-center">Forgot Password</h4>
            <ForgotPasswordForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordView;
