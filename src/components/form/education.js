import React, { Component } from "react";
class Education extends Component{

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
        <h3>Education</h3>
        <div className="inputs">
          <input name="university" onChange={this.onTrigger} className="input" type={"text"} placeholder="University Name"/>
          <input name="ucity" onChange={this.onTrigger} className="input" type={"text"} placeholder="City"/>
          <input name="degree" onChange={this.onTrigger} className="input" type={"text"} placeholder="Degree"/>
          <input name="subject" onChange={this.onTrigger} className="input" type={"text"} placeholder="Subject"/>
          <input name="ufrom" onChange={this.onTrigger} className="input" type={"text"} placeholder="From"/>
          <input name="uto" onChange={this.onTrigger} className="input" type={"text"} placeholder="To"/>
          <button>Delete</button>
          <button>Add</button>
          </div>
       </div>
        );
    }

}

export default Education;