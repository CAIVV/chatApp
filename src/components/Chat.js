import React from 'react';

import {GiftedChat} from 'react-native-gifted-chat';
import Backend from '../Backend';

class Chat extends React.Component {
    state = {
        messages: []
    };
    componentWillMount() {

    }
    render() {
        return (
           <GiftedChat
           messages={this.state.messages}
           onSend={(message) => {
            Backend.sendMessage(message);
           }}
           user={{
               _id: Backend.getUid(),
               name: this.props.name,
           }}
           />
        );
    }
}

Chat.defaultProps = {
    name: 'John',
};

Chat.propTypes = {
    name: React.PropTypes.string,
};

export default Chat;