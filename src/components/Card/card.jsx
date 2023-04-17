import Linkedin from "../../assets/Twitter.png";
import Profile from "../../assets/Image.png";
import "./card.css";

const card = ({ Name, Id, Description, Education }) => {
  return (
    <div className="app__card">
      <div className="profiles">
        <div className="profiles__L">
          <img src={Profile} alt="Profile" />
          <div className="profile__name">
            <p className="sub__desc" style={{ fontWeight: "550" }}>
              {Name}
            </p>
            <p className="sub__desc">{Id}</p>
          </div>
        </div>
        <div className="profiles__R">
          <img src={Linkedin} alt="Social" />
        </div>
      </div>
      <div className="content">
        <p className="cont__desc">{Description}</p>
        <div className="location">
          <p className="sub__desc">{Education}</p>
        </div>
      </div>
    </div>
  );
};

export default card;
