const users = require('../db_apis/add.js');
function getUserFromRec(req) {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    contact: req.body.contact,
    city: req.body.city,
    address: req.body.address
  };
 
  return user;
}
 
async function post(req, res, next) {
  try {
      
   let user = getUserFromRec(req);
   user = await users.create(user);
 
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;