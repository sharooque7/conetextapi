import React, { Component, useContext } from "react";
import { context } from "../context/context";

function Profile() {
  const { userName } = useContext(context);
  return (
    <div className="section ">
      <div className="container-fluid bg-success ">
        <div className="row justify-content-center">
          <div className="col-4 text-center align-self-center ">
            <div className="section pb-5 pt-5 pt-sm-2 ">
              <h1>Profile</h1>
              <h2>UserName : {userName}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
