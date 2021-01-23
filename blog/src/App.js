import React, { Component } from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

import NavBar from "./NavBar";
import Posts from "./Posts";

class App extends Component {
    render() {
        return (
            <div>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Blog
                        </Typography>
                        <NavBar />
                    </Toolbar>
                </AppBar>
                <Posts />
            </div>
        );
    }
}

export default App;
