import Rating from "../sidebar/rating";
import img1 from "../../assets/images/course/AI ML.webp";
import { BsDownload } from "react-icons/bs";
const title = "Artificial Intelligence and Machine Learning (AIML)";
const desc = "The most impressive collection of AI and ML projects online.";
const author = "Rajib Raj";
const reviewCount = "03 reviews";
const videoLink = "https://www.youtube-nocookie.com/embed/jP649ZHA8Tg";

const categoryList = [
  {
    link: "#",
    text: "IIT KGP",
    className: "course-cate",
  },
  {
    link: "#",
    text: "30+ Projects",
    className: "course-offer",
  },
];

const PageHeaderTwo = () => {
  return (
    <div className="pageheader-section style-2">
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
          <div className="col-lg-7 col-12">
            <div className="pageheader-thumb">
              <img src={img1} alt="rajibraj91" className="w-100" />
              <a
                href={videoLink}
                className="video-button popup"
                target="_blank"
              >
                <BsDownload />
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="pageheader-content">
              <div className="course-category">
                {categoryList.map((val, i) => (
                  <a href={val.link} className={val.className} key={i}>
                    {val.text}
                  </a>
                ))}
              </div>
              <h2 className="phs-title">{title}</h2>
              <p className="phs-desc">{desc}</p>
              <div className="phs-thumb">
                <img src="assets/images/pageheader/03.jpg" alt="rajibraj91" />
                <span>{author}</span>
                <div className="course-reiew">
                  <Rating />
                  <span className="ratting-count">{reviewCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeaderTwo;
