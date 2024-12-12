import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const onClickShowSlots = () => {
    navigate('/doctor/slots');
  };
  const onClickAddSlots = () => {
    navigate('/doctor/add-slots');
  };
  const onClickAppointments = () => {
    navigate('/doctor/appointments');
  };

  return (
    <div className="dashboard">
      <Button text="Add Slots" onClick={onClickAddSlots} />
      <Button text="Show Slots" onClick={onClickShowSlots} />
      <Button text="Appointments" onClick={onClickAppointments} />
    </div>
  );
};

export default Dashboard;
