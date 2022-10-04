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
    
        const value = e.target.value;
        const name = e.target.name;
        //this.setState({[name]:value})
        this.props.parentCallback(value,name);
    }


    render(){

        return(
       <div className="information" >
          <h3>Personal Information</h3>
          <form className="inputs">
          <input name ="fname" className="input" type={"text"} onChange={this.onTrigger} placeholder="firstname"/>
          <input name="lname" onChange={this.onTrigger} className="input" type={"text"}  placeholder="Last name"/>
          <input name="title" onChange={this.onTrigger} className="input" type={"text"} placeholder="Title"/>
          <input name="address" onChange={this.onTrigger} className="input" type={"text"} placeholder="Address"/>
          <input name="phonenumber" onChange={this.onTrigger} className="input" type={"text"} placeholder="Phone number"/>
          <input name="email" onChange={this.onTrigger} className="input" type={"email"} placeholder="Email"/>
          <textarea name="description" onChange={this.onTrigger} className="description"  placeholder="Description"/>
          </form>
       </div>
        );
    }

}

export   {Information};