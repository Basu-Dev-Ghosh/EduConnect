import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import HeaderCollege from "../component/layout/headercollege";
import Author from "../component/sidebar/author";

import Projects from "../component/section/project-coll";

const College = () => {
  return (
    <Fragment>
      <Header />
      <HeaderCollege />
      <div className="course-single-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="main-part">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-content">
                      <h3>College Overview</h3>
                      <p>
                        Heritage Institute of Technology, Kolkata, West Bengal
                        is an autonomous institute which is affiliated to
                        MAKAUT, Kolkata. It is accredited by NAAC and NBA and is
                        AICTE approved. The institution mainly offers three
                        programmes, B.Tech, M.Tech, and MCA. The institute has
                        received the ‘Most Preferred Engineering Institute of
                        2020’ award and was ranked at 201st position under
                        Engineering category by the NIRF in 2022.
                      </p>
                    </div>
                  </div>
                </div>
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
