import React, { Component } from 'react';
import Header from './components/Heading';
import Form from './components/form/form';
import Preview from './components/preview/preview';
import "./App.css";

class App extends Component{

  render(){
    return(
      <div className="app">
         <Header/>
         <Form/>
         <Preview/>
      </div>
     
    );
  }

}


export default App;
