import { Grid } from "@mui/material";
import React from "react";
import SideBar from "../../SideBar/SideBar";
import Foods from "../Admin/Foods/Foods";

const BlogHome = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <SideBar></SideBar>
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10}>
          <Foods></Foods>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogHome;
