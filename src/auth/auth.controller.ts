import { Controller, Get, Res, Query } from '@nestjs/common';
import type { Response } from 'express';
import { CasdoorService } from './casdoor.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly casdoor: CasdoorService) { }

    @Get('login')
    login(@Res() res: Response) {
        return res.redirect(this.casdoor.getLoginUrl());
    }

    @Get('callback')
    async callback(@Query('code') code: string) {
        return this.casdoor.handleCallback(code);
    }
}
