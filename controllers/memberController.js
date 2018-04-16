const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log(req.query);
    db.Member.find(req.query)
      .then(dbMembers => {res.json(dbMembers)})
      .catch(err => res.json(err).status(422));
  },
  create: function(req, res) {
    db.Member.create(req.body)
      .then(dbMember => res.json(dbMember))
      .catch(err => res.json(err).status(422));
  },
  findById: function(req, res) {
    db.Member.findById(req.params.id)
      .then(dbMember => res.json(dbMember))
      .catch(err => res.json(err).status(422));
  },
  update: function(req, res) {
    db.Member.update(req.params.id, req.body)
      .then(dbMember => res.json(dbMember))
      .catch(err => res.json(err).status(422));
  },
  delete: function(req, res) {
    db.Member.remove({ _id: req.params.id })
      .then(dbMember => res.json(dbMember))
      .catch(err => res.json(err).status(422));
  }
};
