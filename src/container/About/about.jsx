import UseFetch from "../../constants/useFetch";
import "./about.css";
import Bgs from "../../assets/Pattern.png";
import profile from "../../assets/About.png";
import profile2 from "../../assets/profile1R.png";
import { useState, useEffect } from "react";

const About = () => {
  const data = UseFetch();
  const [imageSrc, setImageSrc] = useState(profile);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1150) {
        setImageSrc(profile2);
      } else {
        setImageSrc(profile);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="section__padding app__about">
      <div className="app__about-content">
        <div className="app__about-content_images">
          <div className="about__image1">
            <img src={Bgs} alt="background" />
          </div>
          <div className="box-bg1"></div>
          <div className="box-bg2"></div>
          <div className="about__image2">
            <img className="image2" src={imageSrc} alt="profile" />
          </div>
        </div>

        <div className="app__about-content_texts">
          <h1 className="header__headtext">About the apprenticeship</h1>
          {data ? (
            <p className="text__description ">{data?.about[0]?.data}</p>
          ) : null}
        </div>
      </div>
      {/* main-div */}
      <div className="app__scholarship">
        {/* scholarship value long-div */}
        <div className="app__scholarship-value box">
          <div className="scholarship__value-amount">
            <p className="p__subheading">Scholarship Value</p>
            <h2>€{data?.total_value}</h2>
          </div>

          <div className="line"></div>

          <div className="app__scholarship-breakdown">
            <div className="tution">
              <p className="p__subheading">Tuition covered</p>
              <p className="p__subheading" style={{ color: "#535353" }}>
                €{data?.tuition}
              </p>
            </div>

            <div className="tution">
              <p className="p__subheading">Remaining</p>
              <p className="p__subheading" style={{ color: "#535353" }}>
                €{data?.remaining}
              </p>
            </div>

            <div className="tution">
              <p className="p__subheading">Living stippends</p>
              <p className="p__subheading" style={{ color: "#535353" }}>
                €‎{data?.stipend_per_year}(€‎{data?.stipend_per_month}/month)
              </p>
            </div>
          </div>
        </div>

        <div className="app__left-container">
          <div className="app__commitments">
            {/* studycommitment */}
            <div className="app-commitment box">
              <p className="p__subheading">Study commitment</p>
              <p className="hlight__text">
                {data?.study_commitment} hours / day
              </p>
              <div className="small__line"></div>
              <p className="sub__desc">{data?.study_commitment_text}</p>
            </div>

            {/* studycommitment */}
            <div className="app-commitment box">
              <p className="p__subheading">Work commitment</p>
              <p className="hlight__text">
                {data?.internship_commitment} hours / day
              </p>
              <div className="small__line"></div>
              <p className="sub__desc">{data?.internship_commitment_text}</p>
            </div>
          </div>

          <div className="app__header-line">
            <div className="line scsm-line"></div>
            <p className="sub__desc" style={{ fontWeight: "500" }}>
              GRADUATION
            </p>
            <div className="line scsm-line"></div>
          </div>

          <div className="app__year-contract  box">
            <p className="p__subheading">A full-time contract</p>
            <p className="hlight__text">1 Year / Full-Time</p>
            <div className="small__line"></div>
            <p className="sub__desc">
              You’ll be guaranteed a 1 year contract with SCG upon graduation.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
