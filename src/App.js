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
      position:"",
      company:"",
      city:"",
      Efrom:"",
      Eto:"",
      university:"",
      ucity:"",
      subject:"",
      degree:"",
      ufrom:"",
      uto:"",
    }
  }

  handlecallback=(info,name)=>{
    this.setState({[name]:info});
  }

  render(){
    const {fname,lname,title,address,phonenumber,email,description,
      position,company,city,Efrom,Eto,
      university,ucity,subject,degree,ufrom,uto}=this.state;
    return(
      <div className="app">
         <Header/>
         <Form newinfo={this.handlecallback}/>
         <Preview fname={fname} lname={lname} title={title} address={address} phonenumber={phonenumber} email={email} description={description}
         position={position} company={company} city={city} Efrom={Efrom} Eto={Eto} 
         university={university} ucity={ucity} subject={subject} degree={degree} ufrom={ufrom} uto={uto}  />
      </div>
     
    );
  }

}


export default App;
