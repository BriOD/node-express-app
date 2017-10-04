const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/tourneys', requireLogin, (req, res) => {});
};
