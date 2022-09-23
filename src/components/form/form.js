import React, { Component } from "react";
import Information from "./information";
import Experience from "./experience";
import Education from "./education";
import "../../styles/form.css";

class Form extends Component{

    render(){
        return(
        <div className="form">
         <Information/>
         <Experience/>
         <Education/>
        </div>
        );
    }

}

export default Form;