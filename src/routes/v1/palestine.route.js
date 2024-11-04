const express = require('express');
const validate = require('../../middlewares/validate');
const {forumValidation} = require('../../validations');
const {commentValidation} = require('../../validations');
const {forumController} = require('../../controllers');
const {commentController} = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/create-forum', validate(forumValidation.createForum), forumController.createForum);
router.get('/get-forum', validate(forumValidation.getForum), forumController.getForum);
router.delete('/delete-forum', validate(forumValidation.deleteForum), forumController.deleteForum);

router.post('/post-comment', validate(commentValidation.createComment), commentController.createComment);
router.get('/get-comment', validate(commentValidation.getComment), commentController.getComment);
router.delete('/delete-comment', validate(commentValidation.deleteComment), commentController.deleteComment);

module.exports = router;
