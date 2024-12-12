import { CreateUserDto } from './dto/create-user.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<User>;
    findByFirstName(firstName: string): Promise<User | null>;
    findByPassword(password: string): Promise<User | null>;
    exist(id: string): Promise<boolean>;
    findByUnique(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null>;
    findByRefreshToken(refreshToken: string): Promise<User>;
    findAllByParams(options: Prisma.UserFindManyArgs): Promise<User[] | string>;
    getUsersWithDetails(options: Prisma.UserFindManyArgs): Promise<{
        role: import(".prisma/client").$Enums.UserRole;
        firstName: string;
        lastName: string;
        email: string;
        userHasSubjects: ({
            userId: string;
            subjectId: string;
        } | {
            user: {
                role: import(".prisma/client").$Enums.UserRole;
                firstName: string;
                lastName: string;
                email: string;
                password: string;
                id: string;
                status: import(".prisma/client").$Enums.UserStatus;
                refreshToken: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
            userId: string;
            subjectId: string;
            subjects: {
                name: string;
                id: string;
                createdAt: Date | null;
                updatedAt: Date | null;
            } | {
                name: string;
                userHasSubjects: {
                    userId: string;
                    subjectId: string;
                }[];
                id: string;
                createdAt: Date;
                updatedAt: Date;
                _count: {
                    userHasSubjects: number;
                };
            };
        })[];
        ads: {
            description: string;
            title: string;
            id: string;
            status: import(".prisma/client").$Enums.AdStatus | null;
            createdAt: Date | null;
            updatedAt: Date | null;
            userId: string;
            city: string;
            postalCode: string;
            address: string;
            startTime: Date | null;
            endTime: Date | null;
            duration: number | null;
            country: string;
            attendees: number | null;
            transport: import(".prisma/client").$Enums.Transport | null;
            conform: boolean | null;
            adPicture: string | null;
            categoryId: string;
            subCategoryId: string;
        }[];
        files: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            filePath: string;
            fileType: import(".prisma/client").$Enums.FileType;
        }[];
        messages: {
            id: string;
            createdAt: Date | null;
            updatedAt: Date | null;
            userId: string;
            conform: boolean | null;
            text: string;
            relatedEntityId: number | null;
            relatedEntityType: import(".prisma/client").$Enums.RelatedEntityType | null;
        }[];
        Profile: {
            id: string;
            createdAt: Date | null;
            updatedAt: Date | null;
            userId: string;
            phone: string;
            city: string;
            postalCode: string;
            address: string;
            profilePicture: string;
        } | {
            user: {
                role: import(".prisma/client").$Enums.UserRole;
                firstName: string;
                lastName: string;
                email: string;
                password: string;
                id: string;
                status: import(".prisma/client").$Enums.UserStatus;
                refreshToken: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            phone: string;
            city: string;
            postalCode: string;
            address: string;
            profilePicture: string;
        };
        userGroups: {
            id: string;
            createdAt: Date | null;
            updatedAt: Date | null;
            userId: string;
            nom: string | null;
        }[];
        userGroupHasUser: {
            status: import(".prisma/client").$Enums.UserGroupUserStatus | null;
            userId: string;
            userGroupId: string;
        }[];
        userHasAd: {
            status: import(".prisma/client").$Enums.UserAdStatus | null;
            createdAt: Date | null;
            updatedAt: Date | null;
            userId: string;
            userAttendees: number | null;
            adId: string;
        }[];
        userHasChild: ({
            userId: string;
            childId: string;
        } | {
            user: {
                role: import(".prisma/client").$Enums.UserRole;
                firstName: string;
                lastName: string;
                email: string;
                password: string;
                id: string;
                status: import(".prisma/client").$Enums.UserStatus;
                refreshToken: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
            userId: string;
            childId: string;
            children: {
                firstName: string | null;
                lastName: string | null;
                id: string;
                createdAt: Date | null;
                updatedAt: Date | null;
                school: string | null;
                class: string | null;
            } | {
                firstName: string;
                lastName: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userHasChild: {
                    userId: string;
                    childId: string;
                }[];
                _count: {
                    userHasChild: number;
                };
                school: string;
                class: string;
            };
        })[];
        _count: {
            ads: number;
            files: number;
            messages: number;
            Profile: number;
            userGroups: number;
            userGroupHasUser: number;
            userHasAd: number;
            userHasChild: number;
            userHasSubjects: number;
        };
    }[]>;
    update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<User>;
    delete(where: Prisma.UserWhereUniqueInput): Promise<User>;
    deleteByUserId(userId: string): Promise<{
        message: string;
    }>;
}
