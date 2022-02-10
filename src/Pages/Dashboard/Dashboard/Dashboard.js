import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import DashboardPort from "../DashboardPort/DashboardPort";
import Pay from "../Pay/Pay";

import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";

import AddProduct from "../AddProduct/AddProduct";
import useAuth from "../../../Hooks/useAuth";

import Reviews from "../../HomePage/Reviews/Reviews";

import Foods from "../../BlogDash/Admin/Foods/Foods";
import AddFood from "../../BlogDash/Admin/AddBlog/AddFood";
import AddNewStudent from "../../BlogDash/StudentDash/AddNewStudent/AddNewStudent";
import ManageAllFood from "../ManageAllFood/ManageAllFood";
import ManageAllStudent from "../../BlogDash/StudentDash/ManageAllStudent/ManageAllStudent";
import ManageStudent from "../../BlogDash/StudentDash/ManageStudent/ManageStudent";
import Distribution from "../../BlogDash/StudentDash/Distribution/Distribution";

const drawerWidth = 260;
function ResponsiveDrawer(props) {
  const { logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* for user */}
      {!admin && (
        <div>
          <Link className="btn mb-3" to={`${url}/pay`}>
            <Button
              style={{ color: "#000", fontSize: "15px", fontWeight: "400" }}
              color="inherit"
            >
              <i
                style={{ marginRight: "5px", fontSize: "20px" }}
                className="fab fa-paypal me-2"
              ></i>{" "}
              Make Payment
            </Button>
            <br />
          </Link>

          <Link className="btn  mb-3" to={`${url}/reviews`}>
            <Button
              style={{ color: "#000", fontSize: "15px", fontWeight: "400" }}
              color="inherit"
            >
              {" "}
              <i
                style={{ marginRight: "5px", fontSize: "20px" }}
                className="fas fa-address-book me-2"
              ></i>
              Review
            </Button>{" "}
            <br />
          </Link>
        </div>
      )}
      {/* for admin */}
      {admin && (
        <div>
          <Link className="btn  mb-3" to="/dashboard">
            <Button
              style={{ color: "#000", fontSize: "15px", fontWeight: "400" }}
              color="inherit"
            >
              <i
                style={{ marginRight: "5px", fontSize: "20px" }}
                className="fas fa-home"
              ></i>
              Admin Home
            </Button>{" "}
            <br />
          </Link>

          <Link className="btn  mb-3" to={`${url}/addfoods`}>
            <Button
              style={{ color: "#000", fontSize: "15px", fontWeight: "400" }}
              color="inherit"
            >
              <i
                style={{ marginRight: "5px", fontSize: "20px" }}
                className="fab fa-blogger me-1"
              ></i>
              Add Food
            </Button>{" "}
            <br />
          </Link>
          <Link className="btn  mb-3" to={`${url}/addstudents`}>
            <Button
              style={{ color: "#000", fontSize: "15px", fontWeight: "400" }}
              color="inherit"
            >
              <i
                style={{ marginRight: "5px", fontSize: "20px" }}
                className="fab fa-blogger me-1"
              ></i>
              Add New Student
            </Button>{" "}
            <br />
          </Link>
          <Link className="btn mb-3" to={`${url}/makeAdmin`}>
            <Button
              style={{ color: "#000", fontSize: "15px", fontWeight: "400" }}
              color="inherit"
            >
              <i
                style={{ marginRight: "5px", fontSize: "20px" }}
                className="fas fa-user-cog me-1"
              ></i>{" "}
              Make Admin
            </Button>{" "}
            <br />
          </Link>
          <Link className="btn mb-3" to={`${url}/distribution`}>
            <Button
              style={{ color: "#000", fontSize: "15px", fontWeight: "400" }}
              color="inherit"
            >
              <i
                style={{ marginRight: "5px", fontSize: "20px" }}
                className="fas fa-user-cog me-1"
              ></i>{" "}
              Distribution
            </Button>{" "}
            <br />
          </Link>

          <Link className="btn mb-3" to={`${url}/managefoods`}>
            <Button
              style={{ color: "#000", fontSize: "15px", fontWeight: "400" }}
              color="inherit"
            >
              <i
                style={{ marginRight: "5px", fontSize: "20px" }}
                className="fas fa-arrows-alt me-1"
              ></i>{" "}
              Manage All Foods
            </Button>{" "}
            <br />
          </Link>
          <Link className="btn mb-3" to={`${url}/managestudents`}>
            <Button
              style={{ color: "#000", fontSize: "15px", fontWeight: "400" }}
              color="inherit"
            >
              <i
                style={{ marginRight: "5px", fontSize: "20px" }}
                className="fas fa-arrows-alt me-1"
              ></i>{" "}
              Manage Students
            </Button>{" "}
            <br />
          </Link>
          <Link className="btn mb-3" to={`${url}/manageallstudents`}>
            <Button
              style={{ color: "#000", fontSize: "15px", fontWeight: "400" }}
              color="inherit"
            >
              <i
                style={{ marginRight: "5px", fontSize: "20px" }}
                className="fas fa-arrows-alt me-1"
              ></i>{" "}
              Manage All Students
            </Button>{" "}
            <br />
          </Link>
        </div>
      )}
      <button onClick={logout} className="ms-3 mt-5 btn btn-dark">
        Logout
      </button>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{ mr: 2, color: "white", display: { sm: "none" } }}
          >
            {" "}
            <i className="fas fa-bars"></i>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Link className="btn text-light" to="/home">
            Home
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        componet="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={`${path}`}>
            <DashboardPort />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>

          {/* <Route path={`${path}/userblog`}>
            <UserAddBlog />
          </Route> */}

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>

          <AdminRoute path={`${path}/addAProducts`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/addfoods`}>
            <AddFood />
          </AdminRoute>
          <AdminRoute path={`${path}/addstudents`}>
            <AddNewStudent />
          </AdminRoute>
          <AdminRoute path={`${path}/manageallstudents`}>
            <ManageAllStudent />
          </AdminRoute>
          <AdminRoute path={`${path}/managestudents`}>
            <ManageStudent />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/distribution`}>
            <Distribution />
          </AdminRoute>

          {/* <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrder />
          </AdminRoute> */}
          <AdminRoute path={`${path}/managefoods`}>
            <ManageAllFood />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}
ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};
export default ResponsiveDrawer;
