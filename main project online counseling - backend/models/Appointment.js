const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  counselor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  type: { type: String, enum: ['mental health', 'relationship', 'career'], required: true },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
