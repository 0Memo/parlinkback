import { UserHasSubjects } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUHSDto } from './dto/userHasSubjectdto';
export declare class UserHasSubjectService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(inputDto: CreateUHSDto): Promise<{
        userHasSubject?: UserHasSubjects;
        message: string;
    }>;
    delete(inputDto: CreateUHSDto): Promise<{
        message: string;
    }>;
    deleteByUserId(userId: string): Promise<{
        message: string;
    }>;
}
