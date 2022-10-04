import React, { Component } from "react";
class Heading extends Component{

    

    render(){
        const {lname,fname,title}=this.props;
        return(
         <div className="heading">
            <h2 className="name">{fname} {lname}</h2>
            <h4 className="title">{title}</h4>
         </div>
        );
    }

}

export default Heading;