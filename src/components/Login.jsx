import React, { useContext } from "react";
import { context } from "../context/context";

const Login = () => {
  const { setUserName, showProfile } = useContext(context);
  return (
    <div className="section ">
      <div className="container-fluid bg-success ">
        <div className="row justify-content-center">
          <div className="col-4 text-center align-self-center ">
            <div className="section pb-5 pt-5 pt-sm-2 ">
              <div className="form-froup">
                <input
                  type="text"
                  placeholder="Username"
                  name="Username"
                  id="Username"
                  className="form-control"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
              </div>
              <button
                onClick={() => {
                  showProfile(true);
                }}
                className="form-control btn btn-secondary mt-2"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
