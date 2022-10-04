import React, { Component } from "react";
import Heading from "./heading";
import Sidebar from "./sidebar";
import Contents from "./contents";
import "../../styles/preview.css";

class Preview extends Component{

  

  render(){
    const {lname,fname,title,address,email,phonenumber,description}=this.props;
    return(
        <div className="preview">
           <Heading fname={fname} lname={lname} title={title} />
           <Sidebar address={address} email={email} phonenumber={phonenumber}  />
           <Contents description={description}  />
        </div>
    );
  }

}

export default Preview;