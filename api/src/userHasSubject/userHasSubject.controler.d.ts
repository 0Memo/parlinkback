import { UserHasSubjectService } from './userHasSubject.service';
import { UserHasSubjects } from '@prisma/client';
import { CreateUHSDto } from './dto/userHasSubjectdto';
export declare class UserHasSubjectController {
    private readonly service;
    private readonly dataName;
    constructor(service: UserHasSubjectService);
    create(inputDto: CreateUHSDto): Promise<{
        [key: string]: UserHasSubjects | string;
    }>;
    delete(deleteUHSDto: CreateUHSDto): Promise<{
        message: string;
    }>;
    deleteByUserId(userId: string): Promise<{
        message: string;
    }>;
}
