import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Index from "views/Index.js";

import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";



import UserProfile from "views/UserProfile";
import EditProfile from "views/EditProfile";
import ChangePassword from "views/ChangePassword";
import Unregister from "views/Unregister";
import Dashboard from "views/Dashboard";
import SellerSup from "views/SelelerSup";
import OrderData from "views/OrderData";
import ProductData from "views/ProductData";

//debo
import AddItemsDash from "views/Debo/AddItem Dash";



import Login from "views/Login";
import { ReactSession } from "react-client-session";



import SignUp from "./views/SignUp"

function App() {
  useEffect(() => {
    ReactSession.setStoreType("localStorage");
  }, []);
  const [user, setuser] = useState({});
  const[Complaint, setComplaint] = useState({
  });
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        
        <Route path="/edit-profile" exact>
          <EditProfile></EditProfile>
        </Route>
        <Route path="/change-password" exact>
          <ChangePassword></ChangePassword>
        </Route>
        <Route path="/user-profile" exact>
          <UserProfile></UserProfile>
        </Route>
        <Route path="/unregister" exact>
          <Unregister></Unregister>
        </Route>
        <Route path="/user-dashboard" exact>
          <Dashboard></Dashboard>
        </Route>
        <Route path="/Seller-sup" exat>
          <SellerSup></SellerSup>
          </Route>
          <Route path="/orders" exat>
          <OrderData></OrderData>
          </Route>
          <Route path="/products" exat>
          <ProductData></ProductData>
          </Route>


          {/* debo */}
          <Route path="/Add-item" exat>
          <AddItemsDash></AddItemsDash>
          </Route>
        
        

        


        <Route path="/login" exact>
          <Login user={user} setuser={setuser}></Login>
        </Route>

        <Route path="/sign-up" exact>
          <SignUp user={user} setuser={setuser}></SignUp>
        </Route>

        
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
