import logo from "../../assets/images/logo/logo.png";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import "./style.css";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { server } from "../../App";
import { PiStudentDuotone } from "react-icons/pi";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar } from "antd";
import { Popover } from "antd";
import { AiFillEdit } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

// import React, { useState } from "react";
import { Modal } from "antd";

import universityImage from "./university.png";
import { BsPlus } from "react-icons/bs";

const phoneNumber = "+800-123-4567 6587";
const address = "Beverley, New York 224 USA";

let socialList = [
  {
    iconName: "icofont-facebook-messenger",
    siteLink: "#",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
  },
  {
    iconName: "icofont-vimeo",
    siteLink: "#",
  },
  {
    iconName: "icofont-skype",
    siteLink: "#",
  },
  {
    iconName: "icofont-rss-feed",
    siteLink: "#",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  const authenticated = localStorage.getItem("user");
  const [type, setType] = useState("student");
  const [option, setOption] = useState("/login");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [open, setOpen] = useState(false);

  const { data: profile, isLoading: isLoading2 } = useQuery(
    ["profile"],
    async () => {
      try {
        const res = await axios.get(`${server}auth/isauth`, {
          withCredentials: true,
        });
        if (res.status === 200) {
          console.log(res.data.user);
          return res.data.user;
        }
        return {};
      } catch (err) {
        return {};
      }
    }
  );

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    navigate(option, {
      state: {
        type,
      },
    });
  };

  const content = (
    <div>
      <p>
        <button className="logout-btn" style={{ display: "flex" }}>
          <NavLink to="/team-single">View Profile</NavLink>
        </button>
      </p>

      <p>
        <li>
          <button className="logout-btn" onClick={() => setIsModalOpen2(true)}>
            Log Out
          </button>
          <Modal
            style={{ top: 100 }}
            title="Confirm Logout"
            open={isModalOpen2}
            onOk={logout}
            onCancel={() => setIsModalOpen2(false)}
          >
            <p>Are you sure, you want to log out?</p>
          </Modal>
        </li>
      </p>
    </div>
  );

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  async function logout() {
    try {
      const res = await axios.get(`${server}auth/logout`, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 204) {
        localStorage.removeItem("user");
        queryClient.invalidateQueries("auth");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <header
      className={`header-section header-mt ${
        headerFiexd ? "header-fixed fadeInUp" : ""
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="header-bottom">
        <div
          className="container"
          style={{
            maxWidth: "100%",
            width: "100%",
            margin: "0",
            display: "flex",
          }}
        >
          <div
            className="header-wrapper"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="logo"
              style={{
                marginLeft: "2rem",
              }}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: "300px",
                  }}
                />
              </Link>
            </div>
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li className="home">
                    <NavLink to="/">Home</NavLink>

                    {/* role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0" */}
                    {/* <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/">Home One</NavLink></li>
                                            <li><NavLink to="/index-2">Home Two</NavLink></li>
                                            <li><NavLink to="/index-3">Home Three</NavLink></li>
                                            <li><NavLink to="/index-4">Home Four</NavLink></li>
                                            <li><NavLink to="/index-5">Home Five</NavLink></li>
                                            <li><NavLink to="/index-6">Home Six</NavLink></li>
                                            <li><NavLink to="/index-7">Home Seven</NavLink></li>
                                        </ul> */}
                  </li>

                  <li className="home">
                    <NavLink to="/course">Projects</NavLink>
                  </li>

                  {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Blog</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/blog">Blog Grid</NavLink></li>
                                            <li><NavLink to="/blog-2">Blog Style 2</NavLink></li>
                                            <li><NavLink to="/blog-3">Blog Style 3</NavLink></li>
                                            <li><NavLink to="/blog-single">Blog Single</NavLink></li>
                                        </ul>
                                    </li> */}

                  <li className="home">
                    {/* <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">About</a> */}
                    {/* <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/about">About</NavLink></li>
                                            <li><NavLink to="/team">Team</NavLink></li>
                                            <li><NavLink to="/instructor">Instructor</NavLink></li>
                                            <li><NavLink to="/shop">Shop Page</NavLink></li>
                                            <li><NavLink to="/shop-single">Shop Details Page</NavLink></li>
                                            <li><NavLink to="/cart-page">Shop Cart Page</NavLink></li>
                                            <li><NavLink to="/search-page">Search Page</NavLink></li>
                                            <li><NavLink to="/search-none">Search None</NavLink></li>
                                            <li><NavLink to="/404">404</NavLink></li>
                                        </ul> */}
                  </li>
                  <li className="home">
                    <NavLink to="/college">College</NavLink>
                  </li>

                  <li className="home">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>

                  <li>
                    <NavLink to="/aboutUs">About</NavLink>
                  </li>

                  {authenticated ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <li>
                        <Link
                          to="/addproject"
                          className="addproject md:mr sm:mr-0"
                          style={{
                            borderRadius: "8px",
                            marginRight: "5px",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "5px",
                            paddingInline: "15px",
                          }}
                        >
                          <span className="flex items-center ">
                            <BsPlus style={{ marginRight: "3px" }} />
                            New Project
                          </span>{" "}
                        </Link>
                      </li>

                      <li>
                        <Popover
                          className="xyz"
                          content={content}
                          trigger="hover"
                        >
                          {profile?.Pic ? (
                            <Avatar
                              style={{
                                marginLeft: "1.2rem",
                                width: "3.5rem",
                                height: "3.5rem",
                              }}
                              src={profile?.Pic}
                            />
                          ) : (
                            <Avatar
                              style={{
                                marginLeft: "1.2rem",
                              }}
                              icon={<UserOutlined />}
                            />
                          )}
                        </Popover>
                      </li>
                    </div>
                  ) : (
                    <>
                      <li>
                        {" "}
                        <button
                          onClick={() => {
                            setOption("/login");
                            showModal();
                          }}
                          style={{
                            borderRadius: "10px",
                            marginRight: "20px",
                            padding: "12px 22px",
                            background: "#dc2f02",
                            color: "#fff",
                            marginTop: "4px",
                          }}
                        >
                          <i className="icofont-user"></i> <span>LOG IN</span>{" "}
                        </button>
                      </li>
                      <li>
                        <button
                          className="signup"
                          onClick={() => {
                            setOption("/signup");
                            showModal();
                          }}
                          style={{
                            backgroundColor: "transparent",
                            color: "black",
                            border: "1px solid black",
                            borderRadius: "10px",
                            padding: "12px 18px",
                            marginTop: "4px",
                            height: "47px",
                          }}
                        >
                          <i
                            className="icofont-users "
                            style={{ marginRight: "5px" }}
                          ></i>{" "}
                          <span>SIGN UP</span>{" "}
                        </button>
                      </li>
                    </>
                  )}
                </ul>
                <Modal
                  title="Select type"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <div
                    className="flex flex-col w-full"
                    style={{ paddingInline: "20px" }}
                  >
                    <div
                      onClick={() => {
                        setType("student");
                      }}
                      className="modal_popUP  "
                      style={{
                        padding: "10px",
                        borderRadius: "6px",
                        backgroundColor: `${
                          type === "student" ? "#f16126" : "#f0f0f0"
                        }`,
                        width: "100%",
                        cursor: "pointer",
                        margin: ".7rem 0",
                        display: "flex",

                        alignItems: "center",
                      }}
                    >
                      {/* PiStudentDuotone */}
                      <PiStudentDuotone
                        // src={studentImage}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          color: `${type === "student" ? "#fff" : "#f16126"}`,
                          // borderRadius: "50%",
                        }}
                      ></PiStudentDuotone>
                      <div
                        style={{
                          fontSize: "18px",
                          paddingLeft: "10px",
                          textAlign: "center",
                          color: `${type === "student" ? "#fff" : "#f16126"}`,
                        }}
                      >
                        Student
                      </div>
                    </div>

                    <div
                      className={`modal_popUP flex  items-center `}
                      onClick={() => setType("college")}
                      style={{
                        padding: "10px",
                        borderRadius: "6px",
                        backgroundColor: `${
                          type === "college" ? "#f16126" : "#f0f0f0"
                        }`,
                        width: "100%",
                        cursor: "pointer",
                        display: "flex",

                        alignItems: "center",
                      }}
                    >
                      <LuSchool
                        style={{
                          width: "35px",
                          height: "35px",

                          color: `${type === "college" ? "#fff" : "#f16126"}`,
                          borderRadius: "50%",
                          border: "1px solid orange",
                        }}
                      ></LuSchool>
                      <div
                        style={{
                          fontSize: "18px",
                          paddingLeft: "10px",
                          textAlign: "center",
                          color: `${type === "college" ? "#fff" : "#f16126"}`,
                        }}
                      >
                        College
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className="ellepsis-bar d-lg-none"
                onClick={() => setSocialToggle(!socialToggle)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
