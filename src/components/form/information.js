import React, { Component } from "react";
import "../../styles/information.css";

class Information extends Component{

    render(){
        return(
       <div className="information">
          <h3>Personal Information</h3>
          <div className="inputs">
          <input className="input" type={"text"} placeholder="First name"/>
          <input className="input" type={"text"} placeholder="Last name"/>
          <input className="input" type={"text"} placeholder="Title"/>
          <input className="input" type={"text"} placeholder="Address"/>
          <input className="input" type={"text"} placeholder="Phone number"/>
          <input className="input" type={"email"} placeholder="Email"/>
          <textarea className="description"  placeholder="Description"/>
          </div>
       </div>
        );
    }

}

export default Information;