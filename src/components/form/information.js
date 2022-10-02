import React, { Component } from "react";



class Information extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"first naoe",
            lastname:"",
            title:"",
            address:"",
            phone:"",
            email:"",
            description:"",
        }

        this.onTrigger=this.onTrigger.bind(this);
    }
//
    onTrigger(e) {
    
        const v = e.target.value;
        this.props.parentCallback(v);
        
        //event.preventDefault();
    }
//


    render(){

        return(
       <div className="information">
          <h3>Personal Information</h3>
          <div className="inputs">
          <input name = "myname" className="input" type={"text"}  onChange={this.onTrigger}  placeholder="firstname"/>
          <button>ok</button>
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

export   {Information};