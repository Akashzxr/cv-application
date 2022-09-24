import React, { Component } from "react";
import Information from "../form/information";
class Heading extends Component{
    render(){
        return(
         <div className="heading">
            <h2 className="name">name lastname</h2>
            <h4 className="title">Title</h4>
         </div>
        );
    }

}

export default Heading;