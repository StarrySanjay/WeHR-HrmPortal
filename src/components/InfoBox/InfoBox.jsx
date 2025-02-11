import "./infoBox.css";

const InfoBox = ({ infoIcon, infoName, handleClick}) => {
  return (
    <div className="info-box" onClick={handleClick}>
      <img src={infoIcon} alt="InfoName" className="info-icon"/>
      <p className="info-name">{infoName}</p>
    </div>
  );
};

export default InfoBox;
