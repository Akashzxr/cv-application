import React, { Component } from "react";
import Heading from "./heading";
import Sidebar from "./sidebar";
import Contents from "./contents";
import "../../styles/preview.css";

class Preview extends Component{

  

  render(){
    const {lname,fname,title,address,email,phonenumber,description,
      position,company,city,Efrom,Eto,
      university,ucity,subject,degree,ufrom,uto}=this.props;
    return(
        <div className="preview">
           <Heading fname={fname} lname={lname} title={title} />
           <Sidebar address={address} email={email} phonenumber={phonenumber}  />
           <Contents description={description} position={position} company={company} city={city} Efrom={Efrom} Eto={Eto}
           university={university} ucity={ucity} subject={subject} degree={degree} ufrom={ufrom} uto={uto} />
        </div>
    );
  }

}

export default Preview;