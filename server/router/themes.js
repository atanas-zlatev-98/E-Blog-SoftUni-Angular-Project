const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { themeController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', themeController.getThemes);
router.post('/', auth(), themeController.createTheme);

router.get('/:themeId', themeController.getTheme);
router.delete('/:themeId',auth(),themeController.deleteTheme)
router.post('/:themeId', auth(), postController.createPost);
// router.put('/:themeId', auth(), themeController.subscribe);
router.put('/:themeId/posts/:postId', auth(), postController.editPost);
router.put('/:themeId',auth(),themeController.editTheme);
router.put('/:themeId/like',auth(),themeController.userLikes);
router.put('/:themeId/dislike',auth(),themeController.userDislike);
router.delete('/:themeId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router