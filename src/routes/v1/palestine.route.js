const express = require('express');
const validate = require('../../middlewares/validate');
const {forumValidation} = require('../../validations');
const {forumController} = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/create-forum', validate(forumValidation.createForum), forumController.createForum);
router.get('/get-forum/:id', validate(forumValidation.getForum), forumController.getForum);
router.delete('/delete-forum/:id', validate(forumValidation.deleteForum), forumController.deleteForum);

module.exports = router;
