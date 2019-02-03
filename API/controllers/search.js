const users = require('../db_apis/search.js');
 
async function get(req, res, next) {
  try {
    const context = {};

    context.tag = req.params.tag;
 
    const rows = await users.find(context);
 
    if (req.params.tag) {
      if (rows.length > 0) {
        res.status(200).json(rows);

      } else {
         res.status(404).end();
      }
    } else {
     res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get