import React, { Component } from "react";
import Heading from "./heading";
import Sidebar from "./sidebar";
import Contents from "./contents";
import "../../styles/preview.css";

class Preview extends Component{

  

  render(){
    
    return(
        <div className="preview">
           <Heading/>
           <Sidebar/>
           <Contents/>
        </div>
    );
  }

}

export default Preview;