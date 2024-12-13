import { Prisma, Child, UserHasChildren } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUHCDto } from './dto/uhc.dto';
export declare class UserHasChildService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(inputDto: CreateUHCDto): Promise<UserHasChildren | string>;
    deleteByUserId(userId: string): Promise<{
        message: string;
    }>;
    delete(where: Prisma.ChildWhereUniqueInput): Promise<Child | string>;
}
