"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SubCategoryService = class SubCategoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.subCategory.create({
            data: {
                name: data.name,
                category: {
                    connect: {
                        id: data.categoryId
                    }
                }
            },
        });
    }
    async findAll() {
        return this.prisma.subCategory.findMany();
    }
    async findByFirstName(name) {
        return this.prisma.subCategory.findFirst({
            where: {
                name: name
            },
        });
    }
    async findAllSubCategoryNames() {
        const subCategories = await this.prisma.subCategory.findMany({
            select: {
                name: true,
            },
        });
        return subCategories.map(subCategory => subCategory.name);
    }
    async findByUnique(subCategoryWhereUniqueInput) {
        return this.prisma.subCategory.findUnique({
            where: subCategoryWhereUniqueInput
        });
    }
    async getAllSubCategoriesNamesByCategoryName(categoryName) {
        try {
            const subCategories = await this.prisma.subCategory.findMany({
                where: {
                    category: {
                        name: categoryName,
                    },
                },
                select: {
                    name: true,
                },
            });
            if (!subCategories || subCategories.length === 0) {
                throw new common_1.NotFoundException(`No subcategories found for categoryName: ${categoryName}`);
            }
            return subCategories.map((subCategory) => subCategory.name);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new Error(`Failed to fetch subcategory names for categoryName: ${categoryName}`);
        }
    }
    async update(where, data) {
        return this.prisma.subCategory.update({
            where,
            data,
        });
    }
    async delete(where) {
        return this.prisma.subCategory.delete({
            where
        });
    }
};
exports.SubCategoryService = SubCategoryService;
exports.SubCategoryService = SubCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubCategoryService);
//# sourceMappingURL=subCategory.service.js.map