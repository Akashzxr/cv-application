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
        if(name==="firstname"){
            this.props.parentCallback(value,"firstname");
        }
        else if(name==="lastname"){
            this.props.parentCallback(value,"lastname");
        }
        else if(name==="title"){
            this.props.parentCallback(value,"title");
        }
        else if(name==="address"){
            this.props.parentCallback(value,"address");
        }
        else if(name==="phonenumber"){
            this.props.parentCallback(value,"phonenumber");
        }
        else if(name==="email"){
            this.props.parentCallback(value,"email");
        }
        else{
            this.props.parentCallback(value,"description");
        }
    }


    render(){

        return(
       <div className="information" >
          <h3>Personal Information</h3>
          <form className="inputs">
          <input name ="firstname" className="input" type={"text"} onChange={this.onTrigger} placeholder="firstname"/>
          <input name="lastname" onChange={this.onTrigger} className="input" type={"text"}  placeholder="Last name"/>
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