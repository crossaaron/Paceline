const db = require("../models");

module.exports = {

    create: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.json(err).status(422));
  },
    find: function(req, res) {
    console.log(req.query)
    db.User.find(req.query)
    .then(dbUsers => res.json(dbUsers))
    .catch(err => res.json(err).status(422));
}
};