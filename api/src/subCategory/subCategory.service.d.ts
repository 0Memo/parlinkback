import { CreateSubCategoryDto } from './dto/create-subCategory.dto';
import { Prisma, SubCategory } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
export declare class SubCategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateSubCategoryDto): Promise<SubCategory>;
    findAll(): Promise<SubCategory[]>;
    findByFirstName(name: string): Promise<SubCategory | null>;
    findAllSubCategoryNames(): Promise<string[]>;
    findByUnique(subCategoryWhereUniqueInput: Prisma.SubCategoryWhereUniqueInput): Promise<SubCategory | null>;
    getAllSubCategoriesNamesByCategoryName(categoryName: string): Promise<string[]>;
    update(where: Prisma.SubCategoryWhereUniqueInput, data: Prisma.SubCategoryUpdateInput): Promise<SubCategory>;
    delete(where: Prisma.SubCategoryWhereUniqueInput): Promise<SubCategory>;
}
