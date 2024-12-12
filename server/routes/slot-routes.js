const express = require('express');
const {
  listSlotByDoctorId,
  addSlot,
  bookSlot,
  cancelSlot,
  listSlots,
} = require('../controllers/slot-controller');
const { checkToken } = require('../middlewares/check-token');

const router = express.Router();

router.get('/', listSlotByDoctorId);
router.get('/:doctorId', listSlots);
router.post('/', addSlot);
router.post('/book', bookSlot);
router.delete('/:slotId', cancelSlot);

module.exports = router;
