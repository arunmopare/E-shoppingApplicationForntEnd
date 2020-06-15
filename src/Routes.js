import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/Home";

import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/admin/create/category' exact component={AddCategory} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/signin' exact component={Signin} />
        <PrivateRoute path='/user/dashboard' exact component={UserDashBoard} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashBoard} />
        <AdminRoute
          path='/admin/categories'
          exact
          component={ManageCategories}
        />
        <AdminRoute path='/admin/create/product' exact component={AddProduct} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
