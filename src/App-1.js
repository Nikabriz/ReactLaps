import React from 'react';
import Message from './Message';
import './styles/MessageList.css'

class MessageList extends React.Component {
    state = {
        show: true,
        counter: 1
    }


    render() {
        const data = this.props.data;
        const counter = this.state.counter;
        return (
            <div className="message-list">

                <Message name={data[0].user} msg={data[0].text} photo={data[0].avatar} />
                <div className="messages-divider"></div>
                {this.state.show ? (
                    <Message name={data[counter].user} msg={data[counter].text} photo={data[counter].avatar} />
                ) : null
                }

            </div>

        )
    }
}

export default MessageList;