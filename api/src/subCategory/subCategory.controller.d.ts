import { SubCategoryService } from './subCategory.service';
import { CreateSubCategoryDto } from './dto/create-subCategory.dto';
import { UpdateSubCategoryDto } from './dto/update-subCategory.dto';
import { SubCategory } from '@prisma/client';
export declare class SubCategoryController {
    private readonly subCategoryService;
    constructor(subCategoryService: SubCategoryService);
    create(data: CreateSubCategoryDto): Promise<{
        subCategory: SubCategory;
        message: string;
    }>;
    findAll(): Promise<{
        subCategories: string[];
        message: string;
    }>;
    findOneName(name: string): Promise<{
        subCategory: SubCategory;
        message: string;
    }>;
    getSubCategoriesByCategoryName(categoryName: string): Promise<{
        subCategories: string[];
        message: string;
    }>;
    update(id: string, updateSubCategoryDto: UpdateSubCategoryDto): Promise<{
        subCategory: SubCategory;
        message: string;
    }>;
    remove(id: string): Promise<SubCategory | {
        message: string;
    }>;
}
