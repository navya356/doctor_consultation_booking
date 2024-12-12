import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Dashboard from './Pages/User/Dashboard';
import Locations from './Pages/User/Locations';
import Hospitals from './Pages/User/Hospitals';
import Departments from './Pages/User/Departments';
import Doctor from './Pages/User/Doctor';
import Doctors from './Pages/User/Doctors';
import Login from './Pages/User/Login';
import Signup from './Pages/User/Signup';
import ShowAppointments from './Pages/User/Appoinments';
import BookSlots from './pages/User/BookSlots';
import ShowPrescriptions from './Pages/User/Prescriptions';

import AdminDashboard from './pages/Admin/Dashboard';
import AdminDepartment from './Pages/Admin/Department';
import AdminAddDepartment from './Pages/Admin/AddDepartment';
import AdminHospital from './Pages/Admin/Hospital';
import AdminAddHospital from './pages/Admin/AddHospital';
import AdminDoctors from './Pages/Admin/Doctors';
import AdminLocations from './Pages/Admin/Locations';
import AdminAddLocation from './Pages/Admin/AddLocation';
import AdminProfile from './Pages/Admin/Profile';
import AdminLogin from './pages/Admin/Login';
import AdminSignup from './pages/Admin/Signup';
import AdminForgotPassword from './pages/Admin/ForgotPassword';
import AdminForgotPasswordReset from './pages/Admin/ForgotPasswordReset';
// import AdminEditProfile from './pages/Admin/EditProfile';
// import AdminResetPassword from './pages/Admin/ResetPassword';

import DoctorLogin from './Pages/Doctor/Login';
import DoctorSignup from './Pages/Doctor/Signup';
import DoctorDashboard from './Pages/Doctor/Dashboard';
import DoctorSlots from './Pages/Doctor/Slots';
import DoctorAddSlots from './Pages/Doctor/AddSlots';
import DoctorAppointments from './Pages/Doctor/Appoinments';
import DoctorAddPrescription from './Pages/Doctor/AddPrescription';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoute role="USER" path="/login" />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/hospitals/:location" element={<Hospitals />} />
        <Route path="/departments/:hospitalid" element={<Departments />} />
        <Route path="/doctors/:hospitaldepartmentid" element={<Doctors />} />
        <Route path="/doctor/:doctorid" element={<Doctor />} />
        <Route path="/book-slots/:doctorId" element={<BookSlots />} />
        <Route path="/appointments" element={<ShowAppointments />} />
        <Route
          path="/prescriptions/:appointmentId"
          element={<ShowPrescriptions />}
        />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
      <Route
        path="/admin/forgot-password-reset/:token"
        element={<AdminForgotPasswordReset />}
      />
      <Route
        path="/admin"
        element={<PrivateRoute role="ADMIN" path="/admin/login" />}
      >
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/departments" element={<AdminDepartment />} />
        <Route path="/admin/add-department" element={<AdminAddDepartment />} />
        <Route
          path="/admin/edit-department/:id"
          element={<AdminAddDepartment />}
        />
        <Route path="/admin/hospitals" element={<AdminHospital />} />
        <Route path="/admin/add-hospital" element={<AdminAddHospital />} />
        <Route path="/admin/edit-hospital/:id" element={<AdminAddHospital />} />
        <Route path="/admin/doctors" element={<AdminDoctors />} />
        <Route path="/admin/locations" element={<AdminLocations />} />
        <Route path="/admin/add-location" element={<AdminAddLocation />} />
        <Route path="/admin/edit-location/:id" element={<AdminAddLocation />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        {/* <Route path="/admin/edit-profile" element={<AdminEditProfile />} /> */}
        {/* <Route path="/admin/reset-password" element={<AdminResetPassword />} /> */}
      </Route>

      <Route path="/doctor/login" element={<DoctorLogin />} />
      <Route path="/doctor/signup" element={<DoctorSignup />} />
      <Route
        path="/doctor"
        element={<PrivateRoute role="DOCTOR" path="/doctor/login" />}
      >
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/slots" element={<DoctorSlots />} />
        <Route path="/doctor/add-slots" element={<DoctorAddSlots />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route
          path="/doctor/add-prescription/:appointmentAndUserId"
          element={<DoctorAddPrescription />}
        />
      </Route>
    </Routes>
  );
};

export default App;
