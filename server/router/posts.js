const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', postController.getLatestsPosts);
router.post('/create-post',postController.createPost);

module.exports = router