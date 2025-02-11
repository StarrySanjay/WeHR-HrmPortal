import PositonCard from "../../components/PositionCard/PositonCard";
import "./Dashboard.css";
import StatCard from "../../components/StatCard/StatCard";
import Graph1 from "../../assets/icons/Dashboard/graph-1.svg";
import Graph2 from "../../assets/icons/Dashboard/graph-2.svg";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard.jsx";
import BirthdayCard from "../../components/BirthdayCard/BirthdayCard.jsx";
import Person1 from "../../assets/icons/Birthday/andrew.jpg";
import Person2 from "../../assets/icons/Birthday/Gwenstacy.jpg";
import Calendar from "../../components/Calendar/Calendar.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="left-container">
        <h2 className="layout-title">Dashboard</h2>

        <div className="position-cards">
          <PositonCard title="Leave Request" value="04" bgColor="#FFEFE7" />
          <PositonCard title="Attendence" value="10" bgColor="#E8F0FB" />
          <PositonCard title="Total Employees" value="24" bgColor="#FDEBF9" />
        </div>

        <div className="stat-cards">
          <StatCard
            title="PayRoll"
            value="48"
            male="12"
            female="12"
            GraphImg={Graph1}
          />

          <StatCard
            title="Task Request"
            value="16"
            male="6"
            female="10"
            GraphImg={Graph2}
          />
        </div>

        <div className="announcement-card">
          <AnnouncementCard />
        </div>
      </div>

      <div className="right-container">
        <div className="dash-calendar">
          <h2>Calendar</h2>
          <Calendar className="calendar-component" />
        </div>

        <div className="birthday-section">
          <h2>Birthday Calendar</h2>
          <div className="bday-cards">
            <BirthdayCard
              personName="Robert Whistable"
              designation="Product manager"
              dob="15 feb 1998"
              personImg={Person1}
            />
            <BirthdayCard
              personName="Gwen Stacy"
              designation="Team Leader"
              dob="5 feb 2002"
              personImg={Person2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
