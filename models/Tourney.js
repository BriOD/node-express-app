const mongoose = require('mongoose');
const { Schema } = mongoose;

const tourneySchema = new Schema({
  venue: String,
  buyin: String,
  date: { type: Date, default: Date.now },
  receipt: { data: Buffer, contentType: String }
  // _user: { type: Schema.Types.ObjectId, ref: 'users' }
});

mongoose.model('tourneys', tourneySchema);

// TODO: add cashed property to model set to default as false.
// also add a cashedAmount which is defaulted to zero
// create a check that runs, if cashedAmount is greater than zero, switch cashed to true
// on the client side, there can be different CSS for tourneys that are marked as cashed
