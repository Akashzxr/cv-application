import React, { Component } from "react";
class Experience extends Component{

    render(){
        return(
       <div>
        <h3>Experience</h3>
        <div className="inputs">
          <input className="input" type={"text"} placeholder="Position"/>
          <input className="input" type={"text"} placeholder="Company"/>
          <input className="input" type={"text"} placeholder="City"/>
          <input className="input" type={"text"} placeholder="From"/>
          <input className="input" type={"text"} placeholder="To"/>
          <button>Delete</button>
          <button>Add</button>
          </div>
       </div>
        );
    }

}

export default Experience;