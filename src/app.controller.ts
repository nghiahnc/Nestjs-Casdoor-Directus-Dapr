import { Controller, Get, Post } from '@nestjs/common';
import { DaprService } from './dapr/dapr.service';

@Controller()
export class AppController {
    constructor(private readonly daprService: DaprService) { }

    @Get()
    getHello(): string {
        return 'Hello from NestJS with Dapr!';
    }

    @Post('publish-test')
    async publishTest() {
        await this.daprService.publish('content-updated', {
            message: 'Nội dung mới từ Directus!',
            timestamp: new Date(),
        });
        return { status: 'Published!' };
    }
}