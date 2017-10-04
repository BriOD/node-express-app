const mongoose = require('mongoose');
const { Schema } = mongoose;

const tourneySchema = new Schema({
  venue: String,
  buyin: String,
  date: { type: Date, default: Date.now },
  receipt: { data: Buffer, contentType: String },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('tourneys', tourneySchema);
