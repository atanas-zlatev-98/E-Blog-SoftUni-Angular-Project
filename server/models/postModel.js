const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    postImageUrl:{
        type:String,
        required:true,
    },
    postTitle:{
        type:String,
        required:true,
    },
    postDescription: {
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    themeId: {
        type: ObjectId,
        ref: "Theme"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Post', postSchema);
