import { useEffect, useState } from 'react';
import { getId } from '../../../utils/authentication';
import axios from '../../../utils/axios';
import './slots.css';

const Slots = () => {
  const [doctorId, setDoctorId] = useState(getId());
  const [slots, setSlots] = useState([]);

  const getSlots = async () => {
    const response = await axios.get(`/slot/${doctorId}`);
    setSlots(response.data);
  };
  console.log(slots);

  useEffect(() => {
    getSlots();
  }, []);

  return (
    <div className="slots">
      {slots.map(item => {
        return (
          <div className="slot-card">
            <p>Date: {item.date}</p>
            <p>Time: {`${item.startTime} - ${item.endTime}`}</p>
            <p>{item.booked ? 'Booked' : 'Not booked'} </p>
            <button>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Slots;
