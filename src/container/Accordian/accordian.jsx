import UseFetch from "../../constants/useFetch";
import "./accordian.css";
import Dropdown from "../../components/dropdown/dropdown";
import { useState } from "react";
import arrow from "../../assets/ArrowD.png";

const Accordian = () => {
  const data = UseFetch();
  const [selectedOption, setSelectedOption] = useState("default");

  const filteredData = data?.faqs?.items?.filter((item) => {
    if (selectedOption === "default") {
      return true;
    } else {
      return item.type === selectedOption;
    }
  });

  return (
    <div className="section__padding app__header">
      <div className="app__faq-header">
        <h2 className="header__headtext">Frequently asked questions</h2>
        <div className="dropdown">
          <p className="filter">Filter By</p>
          <div className="filter__dropdown">
            <div className="text-dark">
              <select
                name=""
                id=""
                className="form-control"
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
                style={{
                  backgroundImage: `url(${arrow})`,
                  backgroundSize: "10px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 30px center"
                }}
              >
                <option value="default" className="default-text">
                  -- Select --
                </option>
                {data &&
                  data?.faqs?.categories.map((category, index) => (
                    <option
                      key={category}
                      value={category}
                      className="default-text"
                    >
                      {category}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="app__accordian">
        <div className="app__programcondition">
          {filteredData?.map((item, index) => (
            <>
              <div className="long__line" key={`L-${index}`}></div>
              <div className="top__dropdown ">
                <p className="p__subheading accordion__title" key={index}>
                  {item.type}
                </p>

                <div className="new__QA">
                  <Dropdown
                    key={`QA-${index}`}
                    question={item.question}
                    answer={item.answer}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="faq__content"></div>
      </div>
    </div>
  );
};

export default Accordian;
