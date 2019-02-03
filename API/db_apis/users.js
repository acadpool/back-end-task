
const database = require('../services/database.js');
 
const baseQuery = 
 `select *
  from users`;
 
async function find(context) {
  let query = baseQuery;
	 const binds = {};
  if (context.id) {
    binds.user_id = context.id;
 
    query += `\nwhere id = :user_id`;
  }
 
 
  const result = await database.simpleExecute(query,binds);
 
  return result.rows;
}
 
module.exports.find = find;