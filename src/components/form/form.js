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
  

getinfo=(childData)=>{
    this.setState({name: childData});
    this.props.newinfo(childData);
    console.log(childData);
 }

    handleCallback = (childData) =>{
        this.getinfo();
        this.setState({name: childData});
    }
   

    
//
    
     
    render(){
        //
        const {name} = this.state;
        //
        return(
        <div className="form">
         <Information parentCallback = {this.getinfo} new={this.getinfo}/>
         {name}
         <Experience/>
         <Education/>
        </div>
        );
    }

}

export default Form;