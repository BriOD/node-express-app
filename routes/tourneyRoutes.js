const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Tourney = mongoose.model('tourneys');

module.exports = app => {
  // querry to fetch all the tourneys for curren_user
  app.get('/api/tourneys', requireLogin, async (req, res) => {
    // console.log(req);
    const tourneys = await Tourney.find({ _user: req.user.id }); //find all tourneys where the _user id is equal to the curren_users id

    res.send(tourneys);
  });

  app.get('/api/tourneys/:id', requireLogin, async (req, res) => {
    // console.log(req.params.id);
    const tourney = await Tourney.find({ _id: req.params.id });
    // console.log('tourney:', tourney);
    res.send(tourney);
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
      await tourney.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
