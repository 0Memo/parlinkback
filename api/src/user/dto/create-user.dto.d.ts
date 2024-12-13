import { UserRole } from '@prisma/client';
export declare class CreateUserDto {
    role: UserRole;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
