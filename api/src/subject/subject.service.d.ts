import { CreateSubjectDto } from './dto/create-subject.dto';
import { Prisma, Subject } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
export declare class SubjectService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(inputDto: CreateSubjectDto): Promise<Subject | string>;
    findAllByParams(options: Prisma.SubjectFindManyArgs): Promise<Subject[] | string>;
    findAllByName(name: string): Promise<Subject | string>;
    findByUnique(WhereUniqueInput: Prisma.SubjectWhereUniqueInput): Promise<Subject | string | null>;
    update(where: Prisma.SubjectWhereUniqueInput, data: Prisma.SubjectUpdateInput): Promise<Subject | string>;
    delete(where: Prisma.SubjectWhereUniqueInput): Promise<Subject | string>;
}
