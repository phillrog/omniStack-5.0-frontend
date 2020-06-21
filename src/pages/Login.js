import React, { Component } from 'react';
import './Login.css';
import twitterLogo from '../twitter.svg'

export default class Login extends Component {
  state = {
    userName: '',

  };

  handleInputChange = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="GoTwitter" />
        
        <form>
          <input 
            value={this.state.userName}
            onChange={this.handleInputChange}
            placeholder="Nome de usuário" />

          <button type="submit">Entrar</button>

    <label>{this.state.userName}</label>
        </form>
      </div>
    );
  }
}