const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const tourneyTemplate = require('../services/emailTemplates/tourneyTemplate');

const Tourney = mongoose.model('tourneys');

module.exports = app => {
  // querry to fetch all the tourneys for curren_user
  app.get('/api/tourneys', requireLogin, async (req, res) => {
    const tourneys = await Tourney.find({ _user: req.user.id }); //find all tourneys where the _user id is equal to the curren_users id

    res.send(tourneys);
  });

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
