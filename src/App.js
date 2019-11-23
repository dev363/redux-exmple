import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'

import {updateUser} from "./actions/userAction"

class App extends Component {

  constructor(props){
    super(props)
  }

  onUpdateUser=(event)=>{
    this.props.onUpdateUser(event.target.value);
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <input type="text" onChange={this.onUpdateUser} /><h2>User Name is {this.props.user}</h2>
        </div>
        
      {/*<button onClick={()=>this.props.onUpdateUser('sss')}>Update user </button>*/}

      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  user: state.user,
  product: state.product
})

const mapDispatchToProps={
  onUpdateUser: updateUser
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
