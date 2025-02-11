import "./PositionCard.css";

const PositonCard = ({ title, value, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <p className="card-title">{title}</p>
      <h3 className="card-value">{value}</h3>
    </div>
  );
};

export default PositonCard;
