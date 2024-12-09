const { themeModel,userModel } = require("../models");
// const {userModel} = require('../models/userModel');
const { newPost } = require("./postController");

function getThemes(req, res, next) {
  themeModel
    .find()
    .populate("userId")
    .then((themes) => res.json(themes))
    .catch(next);
}

function getTheme(req, res, next) {
  const { themeId } = req.params;

  themeModel
    .findById(themeId)
    .populate({
      path: "posts",
      populate: {
        path: "userId",
      },
    })
    .then((theme) => res.json(theme))
    .catch(next);
}

function createTheme(req, res, next) {
  const {
    postImageUrl,
    postTitle,
    postDescription,
    postTrend,
    postReadTime,
    createdBy,
  } = req.body;
  const { _id: userId } = req.user;

  themeModel
    .create({
      postImageUrl,
      postTitle,
      postDescription,
      postTrend,
      postReadTime,
      createdBy,
      userId,
      subscribers: [userId],
    })
    .then((theme) => {
      newPost(
        postImageUrl,
        postTitle,
        postDescription,
        postTrend,
        postReadTime,
        createdBy,
        userId,
        theme._id
      ).then(([_, updatedTheme]) => res.status(200).json(updatedTheme));
    })
    .catch(next);
}

function editTheme(req, res, next) {
  const { themeId } = req.params;
  const { postImageUrl, postTitle, postDescription, postTrend, postReadTime } =
    req.body;
  const { _id: userId } = req.user;

  // if the userId is not the same as this one of the post, the post will not be updated

  themeModel
    .findOneAndUpdate(
      { _id: themeId, userId },
      {
        $set: {
          postImageUrl,
          postTitle,
          postDescription,
          postTrend,
          postReadTime,
        },
      },
      { new: true }
    )
    .then((updatedPost) => {
      if (updatedPost) {
        res.status(200).json(updatedPost);
      } else {
        res.status(401).json({ message: `Not allowed!` });
      }
    })
    .catch(next);
}

function deleteTheme(req, res, next) {
    const { themeId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        userModel.findOneAndUpdate({_id:userId},{$pull:{themes:themeId}}),
        // userModel.findOneAndUpdate({ _id: userId }, { $pull: { themes: themeId },}),
        themeModel.findOneAndDelete({ _id: themeId }),

        // userModel.findOneAndDelete({ _id: userId }, { $: { posts: themeId } }),
        // themeModel.findOneAndDelete({_id:themeId})
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}


function subscribe(req, res, next) {
  const themeId = req.params.themeId;
  const { _id: userId } = req.user;
  themeModel
    .findByIdAndUpdate(
      { _id: themeId },
      { $addToSet: { subscribers: userId } },
      { new: true }
    )
    .then((updatedTheme) => {
      res.status(200).json(updatedTheme);
    })
    .catch(next);
}

function userLikes(req,res,next){
  const themeId = req.params.themeId;
  const {_id:userId} = req.user;

  themeModel.findByIdAndUpdate({_id:themeId},{$addToSet:{userLikes:userId}},{new:true}).then((updatedTheme)=>{
    res.status(200).json(updatedTheme)
  }).catch(next);
}
function userDislike(req,res,next){
  const themeId = req.params.themeId;
  const {_id:userId} = req.user;

  themeModel.findByIdAndUpdate({_id:themeId},{$pull:{userLikes:userId}},{new:true}).then((updatedTheme)=>{
    res.status(200).json(updatedTheme)
  }).catch(next);
}

module.exports = {
  getThemes,
  createTheme,
  getTheme,
  subscribe,
  editTheme,
  deleteTheme,userLikes,userDislike
};
