
const database = require('../services/database.js');
 

 
async function find(context) {
  
	 const binds = {};
  
    let user_tag ="'"+context.tag+"'";
    binds.user_id=context.tag;
 
    const baseQuery = 
 `select *
  from users`;
 let query = baseQuery;
    query += '\nwhere name = '+ user_tag + ' or city = '+ user_tag + ' or email = '+ user_tag + 'or address = '+ user_tag + ' or contact = '+ user_tag;
  
 
 
  const result = await database.simpleExecute(query);
 
  return result.rows;
}
 
module.exports.find = find;