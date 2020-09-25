import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  setMessages = (text) => {
    const message = {
      text,
      role: 'CUSTOMER',
      tags: ['None'],
    };
    const answerList = [];
    answersData.forEach((answer) => {
      answer.tags.forEach((tag) => {
        if (message.text.includes(tag)) {
          answerList.push(answer);
        }
      });
    });
    this.setState((pre) => {
      pre.messages.concat(message, answerList);
    });
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput onMessageChanged={this.setMessages} />
      </main>
    );
  }
}

export default Chat;
