import { useNavigate } from "react-router-dom";
import { employeeData } from "../../utils/EmployeeData";
import "./EmployeeTable.css";
import TableSearch from "../TableSearch/TableSearch.jsx";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";

    const AttendanceTable = () => {

 
  return (
    <div className="emp-table">
      <div className="table-header fixed-header">
        <h2>Attendances</h2>
        <TableSearch />
      </div>
      <table>
        <thead>
          <tr>
            <th>
            </th>
            <th className="tableName-wrapper">
              <div className="theader">
                <span className="label">Name </span>
                <span><IoChevronUp className="label-icon" /></span>
              </div>
            </th>
            <th>
              <div className="theader">
                <span className="label">Join Date </span>
                <IoChevronUp className="label-icon" />
              </div>
            </th>
            <th>
              <div className="theader">
                <span className="label">Designation </span>
                <IoChevronDown className="label-icon" />
              </div>
            </th>
            <th>
              <div className="theader">
                <span className="label">Status </span>
                <IoChevronDown className="label-icon" />
              </div>
            </th>
            <th>
              <span className="label-options">Options</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id} onClick={() => handleRowClick(employee.id)} className="clickable-row">
              <td className="select-radio">
              <input type="radio" name="employeeSelect" className="emp-radio" />
              </td>
              <td className="emp-id">{employee.id}</td>
              <td className="emp-name">
                <div className="name-section">  
                 
                  <div className="name-info">
                    <div>{employee.name}</div>
                    <div className="emp-email">{employee.email}</div>
                  </div>
                </div>
              </td>
              <td className="emp-text join-date">{employee.joinDate}</td>
              <td className="emp-text">{employee.designation}</td>
              <td className="emp-text">{employee.status}</td>
              <td className="options">
                <TfiMoreAlt className="option-icon"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
