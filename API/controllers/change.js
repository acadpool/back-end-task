const change = require('../db_apis/change.js');
 
async function put(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);
 
   
 
    if (req.params.id) {
         const rows = await change.put(context.id,req.body.password);
      if (rows===1) {

        res.status(200).end();

      } else {
        res.status(404).end();
      }
    } else {
      res.status(400).end();
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.put = put;