import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import { NavLink } from "react-router-dom";

const Blog = ({ single }) => {
  const { foodImage, foodName, price, foodId, status } = single;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
        <CardMedia
          component="img"
          style={{ width: "100%", height: "350px", margin: "0 auto" }}
          image={foodImage}
          alt=""
        />
        <CardContent sx={{ p: 3 }}>
          <Typography sx={{ p: 1 }} variant="h5" component="div">
            {foodName}
          </Typography>
          <Typography
            sx={{ p: 1, color: "gray", fontSize: "17px" }}
            variant="h6"
            component="div"
          >
            Food Price: $ {price}
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" component="div">
            Food Id: {foodId}
          </Typography>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/foods/${single._id}`}
          >
            <Button style={{ backgroundColor: "#000" }} variant="contained">
              Read Details
            </Button>
          </NavLink>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Blog;
