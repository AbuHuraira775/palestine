
const comment = require('../models/comments.model')

const getComments = async (req, res) => {
    const comments = await comment.find()
    res.send(comments)
  }

  const getComment = async (req, res) => {
    const comment = await comment.findById(req.params.commentId)
    res.send(comment)
  }

  const createComment = async (req, res) => {
    // const comment = await comment.create(req.body)
    const   comment=req.body
    res.send(comment)
  }

  const updateComment = async (req, res) => {
    const comment = await comment.findByIdAndUpdate(req.params.commentId, req.body)
    res.send(comment)
  }

  const deleteComment = async (req, res) => {
    const comment = await comment.findByIdAndDelete(req.params.commentId)
    res.send(comment)
  }

  module.exports = {
    getComments,
    getComment,
    updateComment,
    createComment,
    deleteComment
  }