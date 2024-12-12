const express = require('express');
const {
  addPrescription,
  showPrescriptions,
} = require('../controllers/prescription-controller.js');

const { checkToken } = require('../middlewares/check-token');

const router = express.Router();

router.post('/', addPrescription);
router.get('/:appointmentId', showPrescriptions);

module.exports = router;
