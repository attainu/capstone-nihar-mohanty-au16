const User = require('../models/user');
const Post = require('../models/post');

exports.getAllPosts = async (req, res) => {
  const username = req.query.user;
  const categoryName = req.query.category;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (categoryName) {
      posts = await Post.find({
        categories: {
          $in: [categoryName],
        },
      });
    } else {
      post = await Post.find();
    }
    res.status(200).json({
      status: 'success',
      length: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.status(200).json({
      status: 'success',
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = Post.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        post: newPost,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(201).json({
        status: 'success',
        data: {
          update: updatePost,
        },
      });
    } else {
      res.status(404).json({
        status: 'failed',
        message: 'You can update only your post',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      await Post.delete();
      res.status(201).json({
        status: 'success',
        message: 'Successfully deleted',
      });
    } else {
      res.status(401).json({
        status: 'failed',
        message: 'You can only delete your post',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};
