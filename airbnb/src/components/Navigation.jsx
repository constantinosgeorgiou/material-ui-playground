import React, { Fragment, useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Divider,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    SwipeableDrawer,
    Toolbar,
    Typography,
} from "@material-ui/core";

import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const Navigation = ({ user }) => {
    const [isBurgerMenuOpen, toggleBurgerMenu] = useState(false);
    const burgerAnchor = "right";

    const [profileAnchor, setProfileAnchor] = useState(null);

    const openProfileMenu = (event) => {
        setProfileAnchor(event.currentTarget);
    };

    const closeProfileMenu = () => {
        setProfileAnchor(null);
    };

    return (
        <Fragment>
            <AppBar position="sticky">
                <Toolbar>
                    {/* Left side */}
                    <Box display="flex" flexGrow={1}>
                        <Typography variant="h6" noWrap>
                            BreezeBnB
                        </Typography>
                    </Box>

                    {/* Right side */}
                    <Box>
                        {/* Menu */}
                        <Hidden smUp>
                            <IconButton
                                color="inherit"
                                aria-label="open menu"
                                edge="end"
                                onClick={toggleBurgerMenu}
                            >
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Hidden>

                        {/* Navigation */}
                        <Hidden xsDown>
                            <Button color="inherit">Become a host</Button>
                            {user ? (
                                <Fragment>
                                    <IconButton
                                        aria-label="profile"
                                        aria-controls="profileMenu"
                                        aria-haspopup="true"
                                        onClick={openProfileMenu}
                                        color="inherit"
                                    >
                                        <AccountCircleOutlinedIcon />
                                    </IconButton>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Button color="inherit">Sign in</Button>
                                    <Button color="inherit">Sign up</Button>
                                </Fragment>
                            )}
                        </Hidden>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Profile menu */}
            <Menu
                id="profileMenu"
                anchorEl={profileAnchor}
                keepMounted
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                open={Boolean(profileAnchor)}
                onClose={closeProfileMenu}
            >
                <MenuItem onClick={closeProfileMenu}>Profile</MenuItem>
                <MenuItem onClick={closeProfileMenu}>Logout</MenuItem>
            </Menu>

            {/* Burger menu */}
            <SwipeableDrawer
                anchor={burgerAnchor}
                open={isBurgerMenuOpen}
                onClose={() => toggleBurgerMenu(false)}
                onOpen={() => toggleBurgerMenu(true)}
            >
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <HouseOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Become a host" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {user ? (
                        <Fragment>
                            <ListItem button>
                                <ListItemText primarty="Profile" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primarty="Log out" />
                            </ListItem>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <ListItem button>
                                <ListItemText primary="Sign in" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Sign up" />
                            </ListItem>
                        </Fragment>
                    )}
                </List>
            </SwipeableDrawer>
        </Fragment>

        // {renderProfileMenu}
        // {renderBurgerMenu}
    );
};

export default Navigation;
