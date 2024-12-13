import { UserRole } from '@prisma/client';
export declare class UserDto {
    role: UserRole;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
