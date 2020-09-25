import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
    };
  }

  handleTextChanged = (event) => {
    this.setState({ text: event.target.value });
  };

  handleMessageSent = () => {
    this.props.onMessageChanged(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleTextChanged} value={this.state.text} />
        <button type="button" onClick={this.handleMessageSent}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
