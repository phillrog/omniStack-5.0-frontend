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

  handleSubmit = e => {
    e.preventDefault();

    const { userName } = this.state;

    if(!userName.length) return;

    localStorage.setItem('@GoTwitter:userName', userName);

    this.props.history.push('/timeline')
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="GoTwitter" />
        
        <form onSubmit={this.handleSubmit}> 
          <input 
            value={this.state.userName}
            onChange={this.handleInputChange}
            placeholder="Nome de usuário" />

          <button type="submit">Entrar</button>

    
        </form>
      </div>
    );
  }
}