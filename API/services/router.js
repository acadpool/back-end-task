const express = require('express');
const router = new express.Router();
const users = require('../controllers/users.js');
const search= require('../controllers/search.js');
const add=  require('../controllers/add.js');
const del=  require('../controllers/del.js');
const change=  require('../controllers/change.js');
router.route('/users/getById/:id?')
  .get(users.get);
router.route('/users/deleteById/:id?')
  .delete(del.delete);
router.route('/users/getAll')
  .get(users.get);
  router.route('/users/search/:tag?')
  .get(search.get);
router.route('/users/add')
  .post(add.post);
  router.route('/users/change/:id?/password')
  .put(change.put);
 
module.exports = router;