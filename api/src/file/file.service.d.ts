import { CreateFileDto } from './dto/create-file.dto';
import { Prisma, File } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
export declare class FileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(inputDto: CreateFileDto): Promise<File | string>;
    findAllByParams(options: Prisma.FileFindManyArgs): Promise<File[] | string>;
    findByUnique(whereUniqueInput: Prisma.FileWhereUniqueInput): Promise<File | string>;
    update(where: Prisma.FileWhereUniqueInput, data: Prisma.FileUpdateInput): Promise<File | string>;
    delete(where: Prisma.FileWhereUniqueInput): Promise<File | string>;
}
