import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";

import BlogDetails from "./Pages/BlogDash/Admin/BlogDetails/BlogDetails";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

import Home from "./Pages/HomePage/Home/Home";
import HomePageBanner from "./Pages/HomePage/HomePageBanner/HomePageBanner";

import Login from "./Pages/Login/Login/Login/Login";
import Register from "./Pages/Login/Login/Register/Register";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

import PurchaseProduct from "./Pages/ProductDetails/PurchaseProduct";

import Headers from "./Pages/Shared/Headers/Headers";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Headers />
              <HomePageBanner />

              <Home />
            </Route>
            <Route exact path="/home">
              <Headers />
              <HomePageBanner />
              <Home />
            </Route>

            <PrivateRoute path="/foods/:id">
              <Headers />
              <BlogDetails />
            </PrivateRoute>

            <Route path="/login">
              <Headers />
              <Login />
            </Route>

            <Route path="/register">
              <Headers />
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
