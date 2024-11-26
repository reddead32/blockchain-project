const { getLoyaltyPoints, transferPoints } = require('./reportWebVitals');

exports.getLoyaltyPoints = (req, res) => {
    const { userID } = req.query;
    getLoyaltyPoints(userID)
        .then(points => res.json(points))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.transferPoints = (req, res) => {
    const { fromUser, toUser, points } = req.body;
    transferPoints(fromUser, toUser, points)
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err.message }));
};