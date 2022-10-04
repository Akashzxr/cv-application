import React, { Component } from "react";
import {Information} from "./information";
import Experience from "./experience";
import Education from "./education";
import "../../styles/form.css";

class Form extends Component{

//
constructor(props){
    super(props);
    this.state={
        name:"",
    }

}
  

getinfo=(childData,name)=>{
    this.props.newinfo(childData,name);
 }

     
    render(){
        return(
        <div className="form">
         <Information parentCallback = {this.getinfo}/>
         <Experience parentCallback = {this.getinfo}/>
         <Education parentCallback = {this.getinfo}/>
        </div>
        );
    }

}

export default Form;