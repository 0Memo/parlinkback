import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from '@prisma/client';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(data: CreateCategoryDto): Promise<{
        category: Category;
        message: string;
    }>;
    findAll(): Promise<{
        categories: string[];
        message: string;
    }>;
    findOneName(name: string): Promise<{
        category: Category;
        message: string;
    }>;
    findOne(id: string): Promise<{
        category: Category;
        message: string;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<{
        category: Category;
        message: string;
    }>;
    remove(id: string): Promise<Category | {
        message: string;
    }>;
}
