import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'

//https://vegibit.com/a-simple-react-js-form-example/


class Form extends React.Component {
  state = { companyName: '' };
    
  handleSubmit = async (event) => {
//    event.preventDefault();
//    const resp = await axios.get(`https://api.github.com/users/${this.state.companyName}`);
//    this.props.onSubmit(resp.data);
//    this.setState({ companyName: '' });
	alert(this.state.companyName);
  };

  render() {
    return (
       <form onSubmit={this.handleSubmit}>

          <input 
            type="text" 
            value={this.state.companyName}
            onChange={event => this.setState({ companyName: event.target.value })}
            placeholder="Enter Company Name" 
            required 
          />
          <button>Go!</button>
        </form>
           
     

      );
    }
}

export default Form;