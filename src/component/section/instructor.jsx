import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import heritage from "../../assets/images/instructor/heritage.png";
import kgp_iit from "../../assets/images/instructor/kgp_iit.svg";
import durgapur_nit from "../../assets/images/instructor/durgapur_nit.png";
import iem from "../../assets/images/instructor/iem.webp";
import { motion } from "framer-motion";
import axios from "axios";
import { server } from "../../App";
import { useQuery } from "react-query";

const subTitle = "Our top Project Creators";
const title = "Projects Uploaded by Visionary Educational Institutions";

const Instructor = () => {
  async function getColleges() {
    try {
      const res = await axios.get(`${server}college/`, {
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
  const { data: colleges, isLoading } = useQuery(["colleges"], getColleges);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="instructor-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {colleges.map((val, i) => (
              <div className="col" key={i}>
                <div className="instructor-item">
                  <div
                    className="instructor-inner"
                    style={{
                      height: "400px",
                    }}
                  >
                    <div
                      className="instructor-thumb"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        src={val?.Pic}
                        alt={`${val.CollegeName}`}
                        style={{ height: "250px" }}
                      />
                    </div>
                    <motion.div
                      initial={{
                        x: -100,
                        opacity: 0,
                      }}
                      whileInView={{
                        transition: { duration: 1.5 },
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{ delay: 0.0 * i }}
                      viewport={{ once: true }}
                      className="instructor-content"
                    >
                      <Link to={`/college/${val.CollegeEmail}`}>
                        <h4>{val.CollegeName}</h4>
                      </Link>

                      <Rating />
                    </motion.div>
                  </div>
                  <div className="instructor-footer">
                    <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                      <li>
                        <i className="icofont-book-alt"></i> 08 Projects
                      </li>
                      <li>
                        <i className="icofont-users-alt-3"></i> 30 Students
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center footer-btn">
            <p>
              Want to upload projects, grow and achieve more in life?
              <Link to="/">Become a creator</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
