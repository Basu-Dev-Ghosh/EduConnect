import React from "react";
import ErrorPage from "./404";
import BlogPage from "./blog";
import BlogPageTwo from "./blog-2";
import BlogPageThree from "./blog-3";
import BlogSingle from "./blog-single";
import CartPage from "./cart-page";
import ContactPage from "./contact";
import CoursePage from "./course";
import ProjectSingle from "./project-single";
import ForgetPass from "./forgetpass";
import Home from "./home";
import InstructorPage from "./instructor";
import LoginPage from "./login";
import SearchNone from "./search-none";
import SearchPage from "./search-page";
import ShopPage from "./shop";
import ShopDetails from "./shop-single";
import SignupPage from "./signup";
import SignUpAs from "./signUpAs";
import AddProject from "./add";
import Edit from "./editProfile";
import TeamPage from "./team";
import TeamSingle from "./team-single";
import LogInAs from "./logInAs";
import College from "./college";
import Uploaded from "./uploaded";
import Admin from "./admin";
import AboutUs from "./aboutUs";
import ProtectedRoute from "./protected";
import { Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { server } from "../App";
import ProtectedRouteAdmin from "./protectedAdmin";

const Routings = () => {
  const { data: auth } = useQuery(["auth"], async () => {
    try {
      const res = await axios.get(`${server}auth/isauth`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        return true;
      }
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  });
  const { data: auth2 } = useQuery(["auth2"], async () => {
    try {
      const res = await axios.get(`${server}auth/isauth/college`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        return true;
      }
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="index-2" element={<HomeTwo />} />
		<Route path="index-3" element={<HomeThree />} />
		<Route path="index-4" element={<HomeFour  />} />
		<Route path="index-5" element={<HomeFive />} />
		<Route path="index-6" element={<HomeSix />} />
		<Route path="index-7" element={<HomeSeven />} /> */}
      <Route path="course" element={<CoursePage />} />
      <Route path="project-single/:id" element={<ProjectSingle />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="blog-2" element={<BlogPageTwo />} />
      <Route path="blog-3" element={<BlogPageThree />} />
      <Route path="blog-single" element={<BlogSingle />} />
      <Route path="/uploaded" element={<Uploaded />} />
      {/* <Route path="about" element={<AboutPage />} /> */}
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="team" element={<TeamPage />} />
      <Route path="team-single" element={<TeamSingle />} />
      <Route path="instructor" element={<InstructorPage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="shop-single" element={<ShopDetails />} />
      <Route path="cart-page" element={<CartPage />} />
      <Route path="search-page" element={<SearchPage />} />
      <Route path="search-none" element={<SearchNone />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="college/:id" element={<College />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="loginas" element={<LogInAs />} />
      <Route path="signUpas" element={<SignUpAs />} />
      <Route path="addproject" element={<AddProject />} />
      <Route
        path="editProfile"
        element={
          <ProtectedRoute auth={auth}>
            <Edit />
          </ProtectedRoute>
        }
      />
      <Route path="admin" element={<Admin />} />
      <Route path="forgetpass" element={<ForgetPass />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routings;
