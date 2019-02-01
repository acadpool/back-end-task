const express = require('express');
const router = express.Router();

const storyController = require('../../controllers/storyController');

/**
 * @method POST
 * @description Add new entry
 * @access public
 */
router.post('/', storyController.add);

/**
 * @method GET
 * @description Get All entries
 * @access public
 */

router.get('/', storyController.getAll);

module.exports = router;
