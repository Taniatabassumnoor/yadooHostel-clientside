import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Foods.css";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(` http://localhost:5000/foods`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  return (
    <Box sx={{ flexGrow: 1, mb: 15 }}>
      <Container>
        <Typography
          sx={{
            fontWeight: 600,
            m: "5%",
            color: "salmon",
            textAlign: "center",
          }}
          variant="h4"
          component="div"
        >
          Foods
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {foods?.map((single) => (
            <Blog key={single?._id} single={single}></Blog>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Foods;
