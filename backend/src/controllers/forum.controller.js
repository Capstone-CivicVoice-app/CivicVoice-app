import { getForumList, createForumPost, getForumById, createForumComment } from "../models/forum.model.js";

const listForum = async (req, res) => {
  const data = await getForumList();
  res.json({ message: "Forum data", data });
};

const createForum = async (req, res) => {
  const { title, content } = req.body;
  const result = await createForumPost({ userId: req.user.id, title, content });
  res.json({ message: "Forum post created", result });
};

const getForumDetail = async (req, res) => {
  const data = await getForumById(req.params.id);
  res.json({ message: "Forum detail", data });
};

const createComment = async (req, res) => {
  const { content } = req.body;
  const result = await createForumComment({
    userId: req.user.id,
    forumId: req.params.id,
    content
  });
  res.json({ message: "Comment created", result });
};

export { listForum, createForum, getForumDetail, createComment };
