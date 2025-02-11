import "./LeaveCards.css";

const LeaveCards = ({ title, value, bgColor, month }) => {
  return (
    <div>
      <div className="card" style={{ backgroundColor: bgColor }}>
        <p className="card-title">{title}</p>
        <h3 className="card-value">{value}</h3>
        <p className="per-month">{month}</p>
      </div>
    </div>
  );
};

export default LeaveCards;
