import { CreateChildDto } from './dto/create-child.dto';
import { Prisma, Child } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
export declare class ChildService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(inputDto: CreateChildDto): Promise<{
        child?: Child;
        message: string;
    }>;
    findAllByParams(options: Prisma.ChildFindManyArgs): Promise<Child[] | string>;
    findAllByFilters(data: CreateChildDto): Promise<Child[]>;
    findByUnique(whereUniqueInput: Prisma.ChildWhereUniqueInput): Promise<Child | string>;
    update(where: Prisma.ChildWhereUniqueInput, data: Prisma.ChildUpdateInput): Promise<Child | string>;
    delete(where: Prisma.ChildWhereUniqueInput): Promise<Child | string>;
}
