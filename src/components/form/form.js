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
    if(name==="firstname"){
        this.props.newinfo(childData,"firstname");
        console.log("firstname");
    }
    else if(name==="lastname"){
        this.props.newinfo(childData,"lastname");
    }
    else if(name==="title"){
        this.props.newinfo(childData,"title");
    }
    else if(name==="address"){
        this.props.newinfo(childData,"address");
    }
    else if(name==="phonenumber"){
        this.props.newinfo(childData,"phonenumber");
    }
    else if(name==="email"){
        this.props.newinfo(childData,"email");
    }
    else{
        this.props.newinfo(childData,"decription");
    }
    
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