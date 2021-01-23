import React from "react";

import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@material-ui/core";

import posts from "./dummy-posts";

const Posts = (props) => {
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={40} justify="center">
                {posts.map((post) => (
                    <Grid item key={post.title}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={post.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {post.title}
                                    </Typography>
                                    <Typography component="p">
                                        {post.excerpt}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Posts;
