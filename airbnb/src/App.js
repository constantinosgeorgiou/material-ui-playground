import React, { Component } from "react";

import "./App.css";

import Navigation from "./components/Navigation";

import Home from "./Home/";

class App extends Component {
    state = {
        user: {
            username: "terminator",
        },
    };
    render() {
        let {
            state: { user },
        } = this;

        user = null;

        return (
            <div className="App">
                <Navigation user={user} />
                <Home />
            </div>
        );
    }
}

export default App;
