import { useState } from "react";
import "./AddEmployeeForm.css";

const AddEmployeeForm = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    employeeName: "",
    employeeNumber: "",
    joiningDate: "",
    email: "",
    mobileNumber: "",
    status: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    isPhysicallyChallenged: "No",
    bloodGroup: "",
    personalEmail: "",
    department: "",
    configuration: "",
  });

  const [showDepartment, setShowDepartment] = useState(false);
  const [showConfiguration, setShowConfiguration] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employeeDetails);
    // Add API call or state update logic here
  };

  return (
    <form className="addEmployee-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>Add details of an employee</h3>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="employeeName">Employee Name</label>
            <input
              type="text"
              id="employeeName"
              name="employeeName"
              placeholder="Enter Employee Name"
              value={employeeDetails.employeeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="employeeNumber">Employee Number</label>
            <input
              type="text"
              id="employeeNumber"
              name="employeeNumber"
              placeholder="Employee Number"
              value={employeeDetails.employeeNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="joiningDate">Date of Joining</label>
            <input
              type={employeeDetails.dateOfBirth ? "date" : "text"}
              id="joiningDate"
              name="joiningDate"
              value={employeeDetails.joiningDate}
              placeholder="Enter Joining Date"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Id"
              value={employeeDetails.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Enter Mobile Number"
              value={employeeDetails.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="status">Employee Status</label>
            <select
              id="status"
              name="status"
              value={employeeDetails.status}
              onChange={handleChange}
              required
            >
              <option value="">Employee Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Personal Details</h3>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type={employeeDetails.dateOfBirth ? "date" : "text"}
              id="dateOfBirth"
              name="dateOfBirth"
              value={employeeDetails.dateOfBirth}
              placeholder="Enter Date of Birth"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={employeeDetails.gender}
              onChange={handleChange}
              required
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="maritalStatus">Marital Status</label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={employeeDetails.maritalStatus}
              onChange={handleChange}
              required
            >
              <option value="">Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <label htmlFor="isPhysicallyChallenged">
              Is Physically Challenged
            </label>
            <select
              id="isPhysicallyChallenged"
              name="isPhysicallyChallenged"
              value={employeeDetails.isPhysicallyChallenged}
              onChange={handleChange}
              required
            >
              <option value="">Yes / No</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="bloodGroup">Blood Group</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={employeeDetails.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="personalEmail">Personal Email Id</label>
            <input
              type="email"
              id="personalEmail"
              name="personalEmail"
              placeholder="Enter Email Id"
              value={employeeDetails.personalEmail}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="toggle-section">
          <h3>Department</h3>
          <h3
            className="toggle-form"
            onClick={() => setShowDepartment(!showDepartment)}
            style={{ cursor: "pointer" }}
          >
            {showDepartment ? "-" : "+"}
          </h3>
        </div>

        {showDepartment && (
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                placeholder="Enter Department"
                value={employeeDetails.department}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
      </div>

      <div className="form-section">
        <div className="toggle-section">
          <h3>Configuration </h3>
          <h3
            className="toggle-form"
            onClick={() => setShowConfiguration(!showConfiguration)}
            style={{ cursor: "pointer" }}
          >
            {showConfiguration ? "-" : "+"}
          </h3>
        </div>
        {showConfiguration && (
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="configuration">Configuration</label>
              <input
                type="text"
                id="configuration"
                name="configuration"
                placeholder="Enter Configuration"
                value={employeeDetails.configuration}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
      </div>

      <div className="button-group">
        <button type="button" onClick={() => console.log("Cancel clicked")}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default AddEmployeeForm;
