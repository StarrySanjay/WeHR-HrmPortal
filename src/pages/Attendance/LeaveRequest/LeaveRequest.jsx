import LeaveCard from "../../../components/LeaveCards/LeaveCards.jsx";
import LeaveTable from "../../../components/LeaveTable/LeaveTable.jsx";
import "./LeaveRequest.css";

const LeaveRequest = () => {
  return (
    <div className="leaveRequest-wrapper">
      <div className="leave-cards">
        <LeaveCard
          title="Casual Leave"
          value="04"
          bgColor="#FFEFE7"
          month="+2% Jan month"
        />
        <LeaveCard
          title="Emergency Leave"
          value="06"
          bgColor="#FDEBF9"
          month="+2% Jan month"
        />
        <LeaveCard
          title="Total Leave Jan"
          value="10"
          bgColor="#E8F0FB"
          month="+2% Jan month"
        />
        <LeaveCard
          title="Today Leave"
          value="02"
          bgColor="#FDEBF9"
          month="23/01  Monday"
        />
      </div>
      <div className="leave-details">
        <LeaveTable />
      </div>
    </div>
  );
};

export default LeaveRequest;
