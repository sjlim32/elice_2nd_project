import { model, mongoose } from "mongoose";
import { postSchema } from "../schemas";

const Post = model("Post", postSchema);

class PostModel {
  async create(postInfo) {
    const createdNewPost = await Post.create(postInfo);
    return createdNewPost;
  }

  async countDocuments(opts) {
    const cnt = await Post.countDocuments(opts);
    return cnt;
  }

  async findAll(perPage, skipDocuments) {
    const posts = await Post.find({ isDeleted: false })
      .sort({ createdAt: -1 })
      .skip(skipDocuments)
      .limit(perPage)
      .populate("userId")
      .populate("categoryId");
    return posts;
  }

  async findAllByCategory(categoryId, perPage, skipDocuments) {
    const posts = await Post.find({ categoryId, isDeleted: false })
      .sort({ createdAt: -1 })
      .skip(skipDocuments)
      .limit(perPage)
      .populate("userId")
      .populate("categoryId");
    return posts;
  }

  // ObjectId로 바꿔줘야 하는 에러 뜨는데, 바꿔주면 class 어쩌구 에러 뜸, 해결 필요
  async findAllByUser(userId) {
    const posts = await Post.find({
      userId,
      isDeleted: false,
    }).populate("categoryId");
    return posts;
  }

  async findAllByTitleSearching(reg, perPage, skipDocuments) {
    const posts = await Post.find({ title: { $regex: reg }, isDeleted: false })
      .sort({ createdAt: -1 })
      .skip(skipDocuments)
      .limit(perPage)
      .populate("userId")
      .populate("categoryId");
    return posts;
  }

  async findById(_id) {
    const post = await Post.findOne({ _id, isDeleted: false })
      .populate("userId")
      .populate("categoryId");
    return post;
  }

  async findByCategory(categoryId) {
    const post = await Post.findOne({ categoryId, isDeleted: false });
    return post;
  }

  async updateById(_id, toUpdate) {
    const opts = { runValidators: true, omitUndefined: true };
    const updated = await Post.updateOne({ _id }, { $set: toUpdate }, opts);
    return updated;
  }

  async softDeleteById(_id) {
    const deleted = await Post.updateOne(
      { _id },
      { $set: { isDeleted: true, deletedAt: Date.now() } },
    );
    return deleted;
  }
}

const postModel = new PostModel();

export { postModel };
