
const database = require('../services/database.js');
 
let baseQuery = 
  `update  users set password = :pass
    where id = :user_id`;
 

async function put(id,password) {
  const binds = {

  };
    binds.user_id=id;
   
let query = `select * from users
    where id = :user_id`;
var result = await database.simpleExecute(query, binds);
if(result.rows.length === 1)
{
     binds.pass=password;
     const result1 = await database.simpleExecute(baseQuery, binds);
    return 1;}
else
  return 0;}
module.exports.put = put;
