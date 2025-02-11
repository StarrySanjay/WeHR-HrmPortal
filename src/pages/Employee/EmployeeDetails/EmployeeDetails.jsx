import { useNavigate } from "react-router-dom";
import AddButton from "../../../components/Buttons/AddButton/AddButton.jsx";
import ImportButton from "../../../components/Buttons/ImportButton/ImportButton.jsx";
import EmployeeTable from "../../../components/EmployeeTable/EmployeeTable.jsx";
import "./EmployeeDetails.css";

const EmployeeDetails = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/employee/employeeForm");
    console.log(handleClick);
  };

  return (
    <div className="empDetails-wrapper">
      <div className="empDetails-header">
        <h2 className="empLayout-title">Employee</h2>
        <div className="header-btn">
          <ImportButton btnName="Import Excel" />
          <AddButton btnName="Add Employee" handleClick={handleClick} />
        </div>
      </div>
      <EmployeeTable />
    </div>
  );
};

export default EmployeeDetails;
