import React, { Component } from 'react';
import Header from './components/Heading';
import Form from './components/form/form';
import Preview from './components/preview/preview';
import "./App.css";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      fname:"",
      lname:"",
      title:"",
      address:"",
      phonenumber:"",
      email:"",
      description:"",
    }
  }

  handlecallback=(info,name)=>{
    this.setState({[name]:info});
  }

  render(){
    const {fname,lname,title,address,phonenumber,email,description}=this.state;
    return(
      <div className="app">
         <Header/>
         {address}
         <Form newinfo={this.handlecallback}/>
         <Preview fname={fname} lname={lname} title={title} address={address} phonenumber={phonenumber} email={email} description={description} />
      </div>
     
    );
  }

}


export default App;
