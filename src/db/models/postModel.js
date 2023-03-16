import { Model } from "mongoose";
import { postSchema } from "../schemas";

const Post = Model("Post", postSchema);

class PostModel {}

const postModel = new PostModel();

export { postModel };
