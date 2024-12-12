import { Category, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.CategoryCreateInput): Promise<Category>;
    findAll(): Promise<Category[]>;
    findAllCategoryNames(): Promise<string[]>;
    findByFirstName(name: string): Promise<Category | null>;
    findByUnique(categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput): Promise<Category | null>;
    update(where: Prisma.CategoryWhereUniqueInput, data: Prisma.CategoryUpdateInput): Promise<Category>;
    delete(where: Prisma.CategoryWhereUniqueInput): Promise<Category>;
}
