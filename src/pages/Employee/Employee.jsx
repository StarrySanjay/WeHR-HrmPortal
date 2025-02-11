import InfoBox from "../../components/InfoBox/InfoBox";
import addEmployee from "../../assets/icons/Employee/Employee.svg";
import orgConfig from "../../assets/icons/Employee/orgConfig.svg";
import "./Employee.css";
import { useNavigate } from "react-router-dom";


const Employee = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/employee/details");
  };

  return (
    <div className="employee-wrapper">
      <h2 className="layout-title">Employee</h2>
      <div className="infoBox-container">
        <InfoBox
          infoIcon={addEmployee}
          infoName="Employee"
          handleClick={handleClick}
        />
        <InfoBox infoIcon={orgConfig} infoName="org Config" />
      </div>
    </div>
  );
};

export default Employee;
