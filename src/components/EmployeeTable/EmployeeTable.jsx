import { useState } from "react";
import { employeeData } from "../../utils/EmployeeData";
import "./EmployeeTable.css";
import TableSearch from "../TableSearch/TableSearch.jsx";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";

const EmployeeTable = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("Joined date");
  const [isDateDropdownVisible, setDateDropdownVisible] = useState(false);
  const [isStatusDropdownVisible, setStatusDropdownVisible] = useState(false);
  const [isDesignationDropdownVisible, setDesignationDropdownVisible] =
    useState(false);

  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
    setStatusDropdownVisible(false);
  };

  const handleDateFilterChange = (dateType) => {
    setDateFilter(dateType);
    setDateDropdownVisible(false);
  };

  const filteredData = employeeData.filter((employee) => {
    return statusFilter === "All" || employee.status === statusFilter;
  });

  return (
    <div className="emp-table">
      <div className="table-header fixed-header">
        <h2>employee</h2>
        <TableSearch />
      </div>

      <table>
        <thead>
          <tr className="label-row">
            <th className="empty-id">
              <div className="empty-row"></div>
            </th>
            <th className="tableName-wrapper">
              <div className="theader">
                <span className="label">Name</span>
                <IoChevronUp className="label-icon" />
              </div>
            </th>
            <th>
              <div
                className="theader"
                onClick={() => setDateDropdownVisible(!isDateDropdownVisible)}
              >
                <span className="label">{dateFilter}</span>
                <IoChevronDown className="label-icon" />
              </div>
              {isDateDropdownVisible && (
                <div className="dropdown">
                  <div onClick={() => handleDateFilterChange("Joined date")}>
                    Joined date
                  </div>
                  <div onClick={() => handleDateFilterChange("Created date")}>
                    Created date
                  </div>
                  <div onClick={() => handleDateFilterChange("Relieved date")}>
                    Relieved date
                  </div>
                  <div
                    onClick={() => handleDateFilterChange("Salary Hike date")}
                  >
                    Salary Hike date
                  </div>
                </div>
              )}
            </th>
            <th>
              <div
                className="theader"
                onClick={() =>
                  setDesignationDropdownVisible(!isDesignationDropdownVisible)
                }
              >
                <span className="label">Designation</span>
                <IoChevronDown className="label-icon" />
              </div>
            </th>
            <th>
              <div
                className="theader"
                onClick={() =>
                  setStatusDropdownVisible(!isStatusDropdownVisible)
                }
              >
                <span className="label">Status</span>
                <IoChevronDown className="label-icon" />
              </div>
              {isStatusDropdownVisible && (
                <div className="dropdown">
                  <div onClick={() => handleStatusFilterChange("All")}>All</div>
                  <div onClick={() => handleStatusFilterChange("Confirmed")}>
                    Confirmed
                  </div>
                  <div onClick={() => handleStatusFilterChange("Probation")}>
                    Probation
                  </div>
                </div>
              )}
            </th>
            <th>
              <span className="label-options">Options</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((employee) => (
            <tr key={employee.id} className="clickable-row">
              <td className="select-radio">
                <input
                  type="radio"
                  name="employeeSelect"
                  className="emp-radio"
                />
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
              <td className="emp-text designation-cell">
                {employee.designation}
              </td>
              <td className="emp-text status-cell">{employee.status}</td>
              <td className="options">
                <TfiMoreAlt className="option-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
