const { useEffect, useState } = require("react");

export const Homework = () => {
    const [messageList, setMessageList] = useState(initialState: []);
    const [value, setValue] = useState(initialState: "");

    const sendMessage = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    }; useEffect()

    const reseForm = () => {
        setValue(value '');
    }

    const onSubmitMessage = (Event) => {
        event.preventDefault();
        sendMessage(autor "user", value);
        resetForm()
    };

    const onChangeMessageInput = (event) => {
        satValue(event.target.value);
    };

    useEffect(effect: () => {
        if (messageList.lenght === 0) {
            return;
        }

        const tail = messageList[messageList.lenght - 1];
        if (tail.author === "bot") {
            return;
        }

        sendMessage(author:"bot", text:"please, help me");
        //esList-disable-next react-hooks/exhaustive-deps
    }, deps: [messageList]);

    return (
        <div>
            <form onSubmit={onSubmitMessage}>
                <input
                    onChange={onChangeMessageInput}
                    placeholder="введите сообщение"
                    value={value}
                    type="text"
                />
                <button>отправить</button>
            </form>
            <ul>
                {messageList.map((item, index: number) => (
                    <li key={index}>
                        {item.author} - {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};