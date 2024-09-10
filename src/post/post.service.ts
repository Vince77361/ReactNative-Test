import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDTO } from './dto/createPostDto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts() {
    return await this.prisma.post.findMany();
  }

  async getPostById(id: number) {
    return await this.prisma.post.findUnique({ where: { id } });
  }

  async createPost(createPostDTO: CreatePostDTO) {
    return await this.prisma.post.create({ data: createPostDTO });
  }

  async deletePost(id: number) {
    await this.prisma.post.delete({ where: { id } });
  }
}
