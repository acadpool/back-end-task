
const database = require('../services/database.js');
 
let baseQuery = 
  `delete from users
    where id = :user_id`;
 

async function del(id) {
  const binds = {

  };
    binds.user_id=id; 
let query = `select * from users
    where id = :user_id`;
const result = await database.simpleExecute(query, binds);
if(result.rows.length === 1)
{
  const result1 = await database.simpleExecute(baseQuery, binds);
  return 1;
}
else
  return 0;}
module.exports.delete = del;