const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const tourneyTemplate = require('../services/emailTemplates/tourneyTemplate');

const Tourney = mongoose.model('tourneys');

module.exports = app => {
  app.post('/api/tourneys', requireLogin, async (req, res) => {
    const { venue, buyin, date, receipt } = req.body;

    const tourney = new Tourney({
      venue,
      buyin,
      date,
      receipt,
      _user: req.user.id
    });

    try {
      // Send an email
      // const mailer = new Mailer(tourney, tourneyTemplate(tourney));
      // await mailer.send();
      await tourney.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
