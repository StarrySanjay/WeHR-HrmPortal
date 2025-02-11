import { useState } from "react";
import { LeaveData } from "../../utils/LeaveData.jsx";
import "./LeaveTable.css";
import TableSearch from "../TableSearch/TableSearch.jsx";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";

const LeaveTable = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("Requested date");
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

  const filteredData = LeaveData.filter((employee) => {
    return statusFilter === "All" || employee.leaveStatus === statusFilter;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case "Approved":
        return "status-approved";
      case "Pending":
        return "status-pending";
      case "Rejected":
        return "status-rejected";
      default:
        return "";
    }
  };

  return (
    <div className="emp-table">
      <div className="table-header fixed-header">
        <h2>Leave Requests</h2>
        <TableSearch />
      </div>

      <table>
        <thead>
          <tr className="label-row">
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
                  <div onClick={() => handleDateFilterChange("Requested date")}>
                    Requested date
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
                <span className="label">Leave Type</span>
                <IoChevronDown className="label-icon" />
              </div>
            </th>
            <th>
              <div className="theader">
                <span className="label">No. of Days</span>
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
                  <div onClick={() => handleStatusFilterChange("Approved")}>
                    Approved
                  </div>
                  <div onClick={() => handleStatusFilterChange("Pending")}>
                    Pending
                  </div>
                  <div onClick={() => handleStatusFilterChange("Rejected")}>
                    Rejected
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
              <td className="emp-name">
                <div className="name-section">
                  <div className="name-info">
                    <div>{employee.name}</div>
                    <div className="emp-email">{employee.email}</div>
                  </div>
                </div>
              </td>
              <td className="emp-text join-date">{employee.requestDate}</td>
              <td className="emp-text designation-cell">
                {employee.leaveType}
              </td>
              <td className="emp-text days-cell">{employee.noOfDays}</td>
              <td
                className={`emp-text status-cell ${getStatusClass(
                  employee.leaveStatus
                )}`}
              >
                {employee.leaveStatus}
              </td>
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

export default LeaveTable;
