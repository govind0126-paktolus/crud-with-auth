import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProtectedController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  profile() {
    return 'I am protected route';
  }
}
