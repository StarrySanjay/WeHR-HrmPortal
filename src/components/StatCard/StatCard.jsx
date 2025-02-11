import "./StatCard.css";

const StatCard = ({ title, value, male, female, GraphImg }) => {
  return (
    <div className="stat-card">
      <div className="text-wrapper">
        <div className="title-section">
          <p className="stat-title">{title}</p>
          <h3 className="stat-value">{value}</h3>
        </div>

        <div className="employees">
          <p className="emp-male">{male} Men</p>
          <p className="emp-female">{female} Women</p>
        </div>
      </div>

      <div className="graph-wrapper">
        <img src={GraphImg} alt="" />
      </div>
    </div>
  );
};

export default StatCard;
