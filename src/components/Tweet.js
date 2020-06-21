import React, { Component } from "react";
import './Tweet.css';
import like from '../like.svg';
import api from '../services/tweets';

export default class Tweet extends Component {
  handleLike = async (event) => {
    
    const {_id} = this.props.tweet;

    await api.post(`${api.endpoints.likes}/${_id}`);

  }
  render()  {
      const { tweet } = this.props;
      return (
        <li className="tweet">
            <strong>{tweet.author}</strong>
            <p>{tweet.content}</p>
            <button type="button">
              <img src={like} alt="Like" onClick={this.handleLike}  />
              {tweet.likes}
            </button>
        </li>  

      );
  }
}
