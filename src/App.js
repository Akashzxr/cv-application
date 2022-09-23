import React, { Component } from 'react';
import Header from './components/Heading';
import Form from './components/form/form';
import "./App.css";

class App extends Component{

  render(){
    return(
      <div className="app">
         <Header/>
         <Form/>
      </div>
     
    );
  }

}


export default App;
