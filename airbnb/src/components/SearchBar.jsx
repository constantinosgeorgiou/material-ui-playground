import React from "react";

import { Paper, TextField, Typography } from "@material-ui/core";

const SearchBar = (props) => {
    return (
        <Paper variant="outlined" rounded>
            <form>
                <TextField 
                    variant="outlined"
                />
            </form>
        </Paper>
    );
};

export default SearchBar;
