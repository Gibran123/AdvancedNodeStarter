const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  const r = await next();

  clearHash(req.user.id);
};