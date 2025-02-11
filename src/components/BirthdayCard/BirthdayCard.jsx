import "./BirthdayCard.css";

const BirthdayCard = ({ personName, designation, dob, personImg }) => {
  
  return (
    <div className="birthdayCard-wrapper">
      <img src={personImg} alt="" className="person-img" />
      <div className="dobText-container">
        <h2 className="person-name">{personName}</h2>
        <p className="designation">{designation}</p>
        <p className="person-dob">{dob}</p>
      </div>
    </div>
  );
};

export default BirthdayCard;

