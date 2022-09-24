import React, { Component } from "react";

class Information extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"first name",
            lastname:"",
            title:"",
            address:"",
            phone:"",
            email:"",
            description:"",
        }
    }


    render(){
        return(
       <div className="information">
          <h3>Personal Information</h3>
          <div className="inputs">
          <input className="input" type={"text"} placeholder="firstname"/>
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