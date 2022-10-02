import React, { Component } from 'react';
import Header from './components/Heading';
import Form from './components/form/form';
import Preview from './components/preview/preview';
import "./App.css";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      name:"",
    }
  }

  handlecallback=(info)=>{
    this.setState({name:info});
    
  }

  render(){
    return(
      <div className="app">
         <Header/>
         {this.state.name}
         <Form newinfo={this.handlecallback}/>
         <Preview/>
      </div>
     
    );
  }

}


export default App;
