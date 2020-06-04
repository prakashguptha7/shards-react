import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout ,WithOutSideBar} from "./layouts";
// Route Views
/* import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables"; */
//import BlogPosts from "./views/BlogPosts";

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Posts from "./views/Posts";
import Users from "./views/Users";
import About from "./views/About"

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    layout: WithOutSideBar,
    component: Login
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/star-posts",
    layout: DefaultLayout,
    component: Posts
  },
  {
    path: "/ngo-posts",
    layout: DefaultLayout,
    component: Posts
  },
  {
    path: "/law-posts",
    layout: DefaultLayout,
    component: Posts
  },
  {
    path: "/student-posts",
    layout: DefaultLayout,
    component: Posts
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  },
  {
  path: "/about",
  layout: DefaultLayout,
  component: About
},
 /*  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  } */
];
