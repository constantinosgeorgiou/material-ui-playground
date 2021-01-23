import React from "react";

import { Typography } from "@material-ui/core";

import Jumbotron from "../components/Jumbotron";

import SearchBar from "../components/SearchBar";

import france from "../assets/france.jpg";

const Home = () => {
    return (
        <Jumbotron image={france}>
            <Typography component="h1" variant="h3" color="inherit">
                This is a title
            </Typography>
            <SearchBar />
        </Jumbotron>
    );
};

export default Home;
