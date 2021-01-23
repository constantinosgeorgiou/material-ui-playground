import React from "react";

import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

import { Home, Book, AccountBox } from "@material-ui/icons";

const NavBar = (props) => {
    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <Typography color="inherit" variant="title">
                        Home <Home />
                    </Typography>
                </ListItemText>

                <ListItemText inset>
                    <Typography color="inherit" variant="title">
                        Posts <Book />
                    </Typography>
                </ListItemText>

                <ListItemText inset>
                    <Typography color="inherit" variant="title">
                        Contact <AccountBox />
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
    );
};

export default NavBar;
