import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import * as actions from "../../redux/actions";
import { useLocation } from "react-router";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const location = useLocation();
  const item = location.state;
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onFailure = (result) => {
    alert(result);
  };

  const onSuccess = (res) => {
    console.log("onSuccess", res);

    sessionStorage.setItem("userdetails", JSON.stringify(res.profileObj));
    dispatch(actions.login(res.profileObj));
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn && item?.redirectto && <Navigate to={item.redirectto} />}
      <div className="d-flex justify-content-center align-items-center">
        <div className="card col-lg-4 col-md-6 col-sm-12">
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <div className="dropdown-divider"></div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="btn btn-success btn-block">{`LOGIN`}</div>
            <div className="dropdown-divider">OR</div>
            <GoogleLogin
              clientId={
                "404216404658-9ko83b9j2ktep0rjic325qu0uho614ps.apps.googleusercontent.com"
              }
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              className="btn-block"
              theme="dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
