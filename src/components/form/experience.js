import React, { Component } from "react";
class Experience extends Component{

    constructor(props){
        super(props);
        this.onTrigger=this.onTrigger.bind(this);
    }

    onTrigger(e) {
    
        const value = e.target.value;
        const name = e.target.name;
        this.props.parentCallback(value,name);
    }

    render(){
        return(
       <div>
        <h3>Experience</h3>
        <div className="inputs">
          <input name="position" onChange={this.onTrigger} className="input" type={"text"} placeholder="Position"/>
          <input name="company" onChange={this.onTrigger} className="input" type={"text"} placeholder="Company"/>
          <input name="city" onChange={this.onTrigger} className="input" type={"text"} placeholder="City"/>
          <input name="Efrom" onChange={this.onTrigger} className="input" type={"text"} placeholder="From"/>
          <input name="Eto" onChange={this.onTrigger} className="input" type={"text"} placeholder="To"/>
         {/* <button>Delete</button>
          <button>Add</button>*/}
          </div>
       </div>
        );
    }

}

export default Experience;