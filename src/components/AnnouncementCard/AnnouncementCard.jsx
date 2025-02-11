import { AnnouncementData } from "../../utils/AnnouncementData.jsx";
import "./AnnouncementCard.css";
import OptionImg from "../../assets/icons/Announcement/Options.svg";

const AnnouncementCard = () => {
  const currentDate = "Today, 13 Sep 2021";

  return (
    <div className="announcement-container">
      <div className="announcement-header">
        <h2 className="announcement-heading">Announcement</h2>
        <span className="announcement-date">{currentDate}</span>
      </div>

      <div className="announcement-list">
        {AnnouncementData.map((item) => (
          <div className="announcement-items" key={item.id}>
            <div className="announcement-text">
              <p className="announcement-title">{item.title}</p>
              <p className="announcement-time">{item.time}</p>
            </div>
            <div className="announcement-options">
              <img src={OptionImg} alt="OptionImg" />
            </div>
          </div>
        ))}
      </div>

      <div className="all-announcements">
        <p className="see-all-link">See All Announcement</p>
      </div>
    </div>
  );
};

export default AnnouncementCard;
