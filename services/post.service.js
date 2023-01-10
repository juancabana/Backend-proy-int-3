import sequelize from "../libs/sequelize.js";
import boom from "@hapi/boom";

class PostService {
  constructor() {}

  async find() {
    const posts = await sequelize.models.Post.findAll({
      include: ['post_crop']
    });
    return posts
  }
  async findOne(id) {
    const post = await sequelize.models.Post.findByPk(id, {
      include: ['post_crop']
    });
    if (!post) {
      throw boom.notFound('Post not found');
    }
    return post;
  }
}

export default PostService;
