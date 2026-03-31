const getForumList = async () => [];
const createForumPost = async ({ userId, title, content }) => ({ id: 1 });
const getForumById = async (id) => null;
const createForumComment = async ({ userId, forumId, content }) => ({ id: 1 });

export { getForumList, createForumPost, getForumById, createForumComment };