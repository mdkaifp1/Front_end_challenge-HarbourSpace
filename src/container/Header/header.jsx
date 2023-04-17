import React from "react";
import UseFetch from "../../constants/useFetch";
import Countdown from "../../components/Countdown/countdown";
import "./header.css";
import Bgs from "../../assets/Background.png";

const header = () => {
  const data = UseFetch();
  return (
    <div className="section__padding app__header">
      <div className="app__header-content ">
        <div className="app__header-content_right">
          {data ? <h1 className="header__headtext">{data.name}</h1> : null}

          <div className="small__screen-content">
            <div className="app__header-content_left-company">
              <div className="header__name-company">
                <p>Powered By: </p>
                <p>{data?.company?.name}</p>
              </div>

              <img src={data?.company?.color_logo?.src} alt="logo" />
            </div>

            <div className="app__header-content_left-timer">
              <p className="p__subheading">Application closes in</p>
              <Countdown />
            </div>

            <div className="app__header-content_left-details">
              <div className="app__header-content_loc">
                <p className="p__subheading">Location</p>
                <p>{data?.location?.name}</p>
              </div>

              <div className="app__header-content_loc">
                <p className="p__subheading">Duration</p>
                <p>1 year</p>
                <p>Full-Time</p>
              </div>

              <div className="app__header-content_loc">
                <p className="p__subheading">Start Date</p>
                <p>23 April 2023</p>
              </div>

              <div className="app__header-content_loc">
                <p className="p__subheading">Last Date</p>
                <p>23 Dec/2023</p>
              </div>
            </div>
          </div>

          <p className="text__description ">
            {" "}
            A fully funded work-study program to launch your tech career{" "}
          </p>
          {data ? (
            <p className="text__description ">{data.description[0].data}</p>
          ) : null}

          <p className="text__description ">
            <strong>Position:</strong> Data Scientist
          </p>
          <button type="button" className="custom__button">
            Apply Now
          </button>
        </div>

        <div className="app__header-content_left ">
          <div className="app__header-content_left-company">
            <div className="header__logo-company">
              <img src={data?.company?.color_logo?.src} alt="logo" />
            </div>
            <div className="header__name-company">
              <p>Powered By</p>
              <p>{data?.company?.name}</p>
            </div>
          </div>

          <div className="app__header-content_left-timer">
            <p className="p__subheading">Application closes in</p>
            <Countdown />
          </div>

          <div className="app__header-content_left-details">
            <div className="app__header-content_loc">
              <p className="p__subheading">Location</p>
              <p>{data?.location?.name}</p>
            </div>

            <div className="app__header-content_loc">
              <p className="p__subheading">Duration</p>
              <p>1 year</p>
              <p>Full-Time</p>
            </div>

            <div className="app__header-content_loc">
              <p className="p__subheading">Start Date</p>
              <p>23 April 2023</p>
            </div>

            <div className="app__header-content_loc">
              <p className="p__subheading">Last Date</p>
              <p>23 Dec/2023</p>
            </div>
          </div>
          <div className="header__bg">
            <img src={Bgs} alt="background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
