const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const tourneyTemplate = require('../services/emailTemplates/tourneyTemplate');

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

    // Send an email
    const mailer = new Mailer(tourney, tourneyTemplate(tourney));
    mailer.send();
  });
};
