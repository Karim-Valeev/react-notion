import React from "react";
import "./styles.css";

// Понадобиться, чтобы по апи в каких-то компонентах запросы совершать
const UserContext = React.createContext({
    userId: "0",
    setUserId: () => {}
});



// Test
// Чтобы он сам себя обновлял, нужно СОСТОЯНИЕ
class Clock extends  React.Component{
    constructor(props) {
        // super(props) обязательно!
        super(props);
        this.state = {date: new Date()};
    }

    // lifecycle methods:
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
    );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


export default class App extends React.Component {
    constructor(props) {
        super(props);

        // this.state = { theme: themes.dark };
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <Clock/>
            </div>
        );
    }
}
