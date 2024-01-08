import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import HeaderCollege from "../component/layout/headercollege";
import Author from "../component/sidebar/author";

import Projects from "../component/section/project-coll";
import { useParams } from "react-router-dom";
import { server } from "../App";
import axios from "axios";
import { useQuery } from "react-query";

const College = () => {
  const { id } = useParams();
  async function getCollegeById() {
    try {
      const res = await axios.get(`${server}college/${id}`, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        return res.data.data;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  const { data: college, isLoading } = useQuery(
    ["college", id],
    getCollegeById,
    {
      enabled: id !== undefined,
    }
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      <Header />
      <HeaderCollege college={college} />
      <div className="course-single-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="main-part">
                <div className="course-item"></div>
                <Projects />

                <Author />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default College;
