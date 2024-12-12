import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../utils/axios';
import './prescriptions.css';

const Prescriptions = () => {
  const { appointmentId } = useParams();

  const [prescriptions, setPrescriptions] = useState([]);

  const getPrescriptions = async () => {
    const response = await axios.get(`/prescription/${appointmentId}`);
    setPrescriptions([response.data]);
  };

  useEffect(() => {
    getPrescriptions();
  }, []);

  return (
    <div className="prescriptions">
      {prescriptions.map(item => {
        return (
          <div className="prescription-card">
            <p>Doctor: {item.doctor.email}</p>
            <p>Comments: {item.comments}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Prescriptions;
