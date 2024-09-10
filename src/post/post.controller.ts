import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDTO } from './dto/createPostDto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPosts() {
    return await this.postService.getAllPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return await this.postService.getPostById(+id);
  }

  @Post()
  async createPost(@Body() createPostDTO: CreatePostDTO) {
    return await this.postService.createPost(createPostDTO);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    await this.postService.deletePost(+id);
  }
}
