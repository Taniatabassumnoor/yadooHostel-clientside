import { Grid, Box } from "@mui/material";

import React from "react";
import { Button, FormControl } from "react-bootstrap";
import Calendar from "./Calendar/Calendar";

const Distribution = () => {
  return (
    <div>
      <h1>This is Distribution section</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Box>
            <FormControl
              type="search"
              placeholder="Search by student roll number"
              className="me-2 mt-5"
              aria-label="Search"
            />
            <br />
            <Button variant="outline-success">Search</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Calendar></Calendar>
        </Grid>
      </Grid>
    </div>
  );
};

export default Distribution;
