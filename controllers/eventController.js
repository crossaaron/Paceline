const db = require("../models");

module.exports = {
  find: function(req, res) {
      console.log(req.query)
    db.Event.find(req.query)
      .then(dbEvents => res.json(dbEvents))
      .catch(err => res.json(err).status(422));
  },
  create: function(req, res) {
    db.Event.create(req.body)
      .then(dbEvent => res.json(dbEvent))
      .catch(err => res.json(err).status(422));
  },
  findById: function(req, res) {
    db.Event.findById(req.params.id)
      .then(dbEvent => res.json(dbEvent))
      .catch(err => res.json(err).status(422));
  },
  update: function(req, res) {
    db.Event.update(req.params.id, req.body)
      .then(dbEvent => res.json(dbEvent))
      .catch(err => res.json(err).status(422));
  },
  delete: function(req, res) {
    db.Event.remove({ _id: req.params.id })
      .then(dbEvent => res.json(dbEvent))
      .catch(err => res.json(err).status(422));
  }
};