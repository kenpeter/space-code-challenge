const profileModel = require('../models/profile');

exports.profileHome = function(req, res, next) {
  profileModel.find((err, doc) => {
    res.status(200).json(doc);
  });
};

exports.createProfile = function(req, res, next) {
  const data = req.body;
  profileModel.create(data, (err, doc) => {
    if (err) return next(err);
    res.send(doc);
  });
};
