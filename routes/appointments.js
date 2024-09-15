const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Create an appointment
router.post('/', async (req, res) => {
   const { firstname,lastname, date, time, barber, service } = req.body;

   try {
      const newAppointment = new Appointment({
         firstname,
         lastname,
         date,
         time,
         barber,
         service,
      });

      const appointment = await newAppointment.save();
      res.status(201).json(appointment);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// Get all appointments
router.get('/', async (req, res) => {
   try {
      const appointments = await Appointment.find();
      res.json(appointments);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

module.exports = router;
