import { AuthService } from "./auth.service";
import { UserService } from '../user/user.service';
import { CreateAdminDto } from "./dto/createAdmin.dto";
import { ChangePasswordDto } from "./dto/changePassword.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from '@nestjs/jwt';
import { User } from "@prisma/client";
export declare class AuthController {
    private authService;
    private userService;
    private jwtService;
    constructor(authService: AuthService, userService: UserService, jwtService: JwtService);
    signup(data: CreateAdminDto): Promise<{
        user: User;
        messages: string[];
    }>;
    updatePswd(data: ChangePasswordDto): Promise<{
        user: User;
        message: string;
    }>;
    login(data: LoginUserDto): Promise<{
        access_token: string;
        refresh_token: string;
        message: string;
    }>;
    updateRoute(id: string, data: ChangePasswordDto): Promise<{
        user: User;
        message: string;
    }>;
    refreshTokens(refresh_token_in: string): Promise<{
        access_token: string;
        refresh_token: string;
        message: string;
    }>;
}
