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
    //this.setState({name: childData});
    this.props.newinfo(childData,name);
 }

     
    render(){
        //
        const {name} = this.state;
        //
        return(
        <div className="form">
         <Information parentCallback = {this.getinfo}/>
         {name}
         <Experience/>
         <Education/>
        </div>
        );
    }

}

export default Form;