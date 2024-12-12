import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../../utils/authentication';
import axios from '../../../utils/axios';
import './appoinments.css';

const Appointments = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(getId());
  const [appointments, setAppointments] = useState([]);
  const getAppointments = async () => {
    const response = await axios.get(`/appointment/${userId}`);
    setAppointments(response.data);
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const onClick = id => {
    navigate('/prescriptions/' + id);
  };

  return (
    <div className="appointments">
      {appointments.map(item => {
        return (
          <div className="appointment-card">
            <p>Date: {item.slot.date}</p>
            <p>Time: {`${item.slot.startTime} - ${item.slot.endTime}`}</p>
            <p>Doctor: {item.doctor.firstname}</p>
            <button
              onClick={() => {
                onClick(item._id);
              }}
            >
              See prescriptions
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Appointments;
