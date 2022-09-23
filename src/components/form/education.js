import React, { Component } from "react";
class Education extends Component{

    render(){
        return(
       <div>
        <h3>Education</h3>
        <div className="inputs">
          <input className="input" type={"text"} placeholder="University Name"/>
          <input className="input" type={"text"} placeholder="City"/>
          <input className="input" type={"text"} placeholder="Degree"/>
          <input className="input" type={"text"} placeholder="Subject"/>
          <input className="input" type={"text"} placeholder="From"/>
          <input className="input" type={"text"} placeholder="To"/>
          <button>Delete</button>
          <button>Add</button>
          </div>
       </div>
        );
    }

}

export default Education;