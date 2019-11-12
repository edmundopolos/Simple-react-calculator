import React, { Component } from 'react';

import './App.css';
import Calculator from './ios'
import ACalculator from './android'


class App extends Component {
  constructor(){
    super()
    this.state = {
          single: false,
          multi: false
        }
        this.click=this.click.bind(this)
       
  }
  click(e){
    if(e.target.value==='single'){
    this.setState({single: true, multi:''})
  }else if(e.target.value==='multi'){
    this.setState({multi: true, single:''})
  }else{
    this.setState({multi: '', single:''})
  }
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.single===true?
          <Calculator/>: 
          this.state.multi===true
          ?<ACalculator/>:
          <div className='App-header'>
            <h1>Simple Calculator</h1>
          <select onChange={this.click}>
            <option value='null'>Select Calculator Type</option>
             <option value='multi' >Multiple Data Display</option>
             <option value='single'>Single Data Display</option>
           
          </select>
          
          </div>
          
        }
       
      </div>
    );
  }
}

export default App;
