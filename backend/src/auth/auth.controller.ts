import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/service/users.service';
import { User } from 'src/models/user.schema';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly usersService: UsersService,
  ) {}

  @Post('login/google')
  async login(@Body() body: { token: string }) :Promise<{ access_token: string }> {
    const ticket = await client.verifyIdToken({
      idToken: body.token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    // console.log(payload);
    if (!payload) {
      throw new UnauthorizedException('Invalid Google token');
    }
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return await this.authService.login(user);
  }

  // @Post('/signup')
  // createUser(@Body() body: { name: string; email: string, age: number, password: string }): Promise<User> {
  //   return this.usersService.createUser(body.name, body.email, body.age, body.password);
  // }
}
