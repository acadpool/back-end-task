const users = require('../db_apis/del.js');
 
async function del(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const success = await users.delete(id);
    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}
module.exports.delete = del;