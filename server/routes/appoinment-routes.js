const express = require('express');
const {
  listAppointmentsByUserId,
  listAppointmentsByDoctorId,
} = require('../controllers/appoinment.-controllers');
const { checkToken } = require('../middlewares/check-token');

const router = express.Router();

router.get('/:userId', listAppointmentsByUserId);
router.get('/doctor/:doctorId', listAppointmentsByDoctorId);

module.exports = router;
