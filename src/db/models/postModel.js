import { model } from "mongoose";
import { postSchema } from "../schemas";

const Post = model("Post", postSchema);

class PostModel {}

const postModel = new PostModel();

export { postModel };
