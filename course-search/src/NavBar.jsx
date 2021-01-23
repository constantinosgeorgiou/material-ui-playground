import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Seach courses
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
