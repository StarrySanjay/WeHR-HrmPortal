import './Attendance.css'
import { useNavigate } from "react-router-dom"
import InfoBox from '../../components/InfoBox/InfoBox'
import addEmployee from '../../assets/icons/Attendence/Employee.svg'
import attendance from '../../assets/icons/Attendence/Attendence.svg'

const Attendance = () => {
  
  const navigate = useNavigate();

  const handleClick = () =>{
      navigate("/attendance/LeaveRequest")
  }
  
  const handleClick2 = () =>{
    navigate("/attendance/attendanceList");
  }

  return (
    <div className="attendance-wrapper">
      <h2 className="layout-title">Attendance</h2>
      <div className="infoBox-container">
        <InfoBox className="infoBox-leave-request" infoIcon={addEmployee} infoName="Leave Request" handleClick={handleClick} />
        <InfoBox className="infoBox-attendance" infoIcon={attendance} infoName="Attendances" handleClick={handleClick2} />
      </div>
    </div>
  )
}

export default Attendance