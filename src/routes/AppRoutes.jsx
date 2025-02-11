import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import Employee from "../pages/Employee/Employee";
import Announcement from "../pages/Announcement/Announcement";
import Attendance from "../pages/Attendance/Attendance.jsx";
import Payroll from "../pages/Payroll/Payroll";
import Task from "../pages/Task/Task";
import Support from "../pages/Support/Support";
import Settings from "../pages/Settings/Settings";
import MainLayout from "../components/MainLayout/MainLayout";
import EmployeeDetails from "../pages/Employee/EmployeeDetails/EmployeeDetails";
import LeaveRequest from "../pages/Attendance/LeaveRequest/LeaveRequest";
import AddEmployeeForm from "../pages/Employee/AddEmployeeForm/AddEmployeeForm.jsx";
import AttendanceList from "../pages/Attendance/AttendanceList/AttendanceList.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<SignIn />} />

      {/* Protected Routes inside MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* RELATIVE PATH */}
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/details" element={<EmployeeDetails />} />
        <Route path="/employee/employeeForm" element={<AddEmployeeForm />} />
        {/* RELATIVE PATH */}
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/attendance/leaveRequest" element={<LeaveRequest />} />
        <Route path="/attendance/attendanceList" element={<AttendanceList />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/task" element={<Task />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/support" element={<Support />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
