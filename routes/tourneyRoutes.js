const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Tourney = mongoose.model('tourneys');

module.exports = app => {
  app.post('/api/tourneys', requireLogin, (req, res) => {
    const { venue, buyin, date, receipt } = req.body;

    const tourney = new Tourney({
      venue,
      buyin,
      date,
      receipt,
      _user: req.user.id
    });
  });
};
