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

/**
 * @method GET
 * @description Get story by id
 * @param id
 * @access public
 */
router.get('/:id', storyController.getById);

/**
 * @method DELETE
 * @description Delete story by id
 * @param id
 * @access public
 */
router.delete('/:id', storyController.deleteById);

/**
 * @method GET
 * @description Search
 * @access public
 */

router.get('/search/text', storyController.search);

module.exports = router;
