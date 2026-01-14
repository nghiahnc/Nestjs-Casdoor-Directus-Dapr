import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [AuthModule, PostsModule],
})
export class AppModule { }
