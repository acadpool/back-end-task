const database = require('../services/database.js');
const oracledb = require('oracledb');
const createSql =
 `insert into users (
    id,
    name,
    email,
    password,
    contact,
    city,
    address
  ) values (
    :user_id,
    :name,
    :email,
    :password,
    :contact,
    :city,
    :address
  )`;
 
async function create(id) {
  const user = Object.assign({}, id);
  var query = "SELECT id FROM users order by id desc";
  var res = await database.simpleExecute(query);
  
 user.user_id=1;
 if(res.rows.length>0)
  user.user_id += res.rows[0].ID;
  const result = await database.simpleExecute(createSql, user);

 
   return user.user_id;
 
 
}
 
module.exports.create = create;