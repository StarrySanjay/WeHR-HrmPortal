import DashboardImg from "../assets/icons/Sidebar/dashboard.svg";
import EmployeeImg from "../assets/icons/Sidebar/employee.svg";
import AttendenceImg from "../assets/icons/Sidebar/attendence.svg";
import PayrollImg from "../assets/icons/Sidebar/payroll.svg";
import TaskImg from "../assets/icons/Sidebar/task.svg";
import AnnouncementImg from "../assets/icons/Sidebar/announcement.svg";
import SupportImg from '../assets/icons/Sidebar/Support.svg'
import SettingsImg from '../assets/icons/Sidebar/Settings.svg'
import DashboardAcitveImg from '../assets/icons/Sidebar/dashboard-active.svg'
import EmployeeAcitveImg from '../assets/icons/Sidebar/employee-active.svg'
import AttendanceAcitveImg from '../assets/icons/Sidebar/attendance-active.svg'

export const SidebarItems = [
  {
    title: "Dashboard",
    icon: DashboardImg,
    link: "/dashboard",
    activeIcon: DashboardAcitveImg
  },
  {
    title: "Employee",
    icon: EmployeeImg,
    link: "/employee",
    activeIcon:  EmployeeAcitveImg
  },
  {
    title: "Attendance",
    icon: AttendenceImg,
    link: "/attendance",
    activeIcon: AttendanceAcitveImg
  },
  {
    title: "Payroll",
    icon: PayrollImg,
    link: "/payroll",
  },
  {
    title: "Task",
    icon: TaskImg,
    link: "/task",
  },
  {
    title: "Announcement",
    icon: AnnouncementImg,
    link: "/announcement",
  },

  {
    title: "Support",
    icon: SupportImg,
    link: "/support",
  },

  {
    title: "Settings",
    icon: SettingsImg,
    link: "/settings",
  }
];
