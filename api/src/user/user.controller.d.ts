import { AuthService } from "../auth/auth.service";
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from "../user/dto/register-user.dto";
import { SubjectService } from "../subject/subject.service";
import { ChildService } from "../child/child.service";
import { UserHasChildService } from "../child/userHasChild.service";
import { UserHasSubjectService } from "../userHasSubject/userHasSubject.service";
import { User } from '@prisma/client';
interface getByIdResponse {
    firstName: string;
    lastName: string;
}
export declare class UserController {
    private readonly userService;
    private authService;
    private jwtService;
    private subjectService;
    private childService;
    private uhcService;
    private userHasSubjectService;
    constructor(userService: UserService, authService: AuthService, jwtService: JwtService, subjectService: SubjectService, childService: ChildService, uhcService: UserHasChildService, userHasSubjectService: UserHasSubjectService);
    signup(data: RegisterUserDto): Promise<{
        user: User;
        messages: string[];
    }>;
    private extractTokenFromHeader;
    logout(token: string): Promise<{
        access_token: string;
        refresh_token: string;
        message: string;
    }>;
    getUsersWithDetails(query: {
        skip?: string;
        take?: string;
    }): Promise<{
        users: any[];
        message: string;
    }>;
    readRoute(id: string): Promise<{
        data: getByIdResponse;
        message: string;
    }>;
}
export {};
