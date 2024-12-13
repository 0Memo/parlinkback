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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryController = void 0;
const common_1 = require("@nestjs/common");
const subCategory_service_1 = require("./subCategory.service");
const create_subCategory_dto_1 = require("./dto/create-subCategory.dto");
const update_subCategory_dto_1 = require("./dto/update-subCategory.dto");
const jwt_guards_1 = require("../guards/jwt.guards");
const common_2 = require("@nestjs/common");
let SubCategoryController = class SubCategoryController {
    constructor(subCategoryService) {
        this.subCategoryService = subCategoryService;
    }
    async create(data) {
        const subCategory = await this.subCategoryService.findByUnique({
            name: data.name,
            id: ''
        });
        if (!subCategory)
            throw new common_1.HttpException(`La sous-catégorie n'existe pas`, common_1.HttpStatus.CONFLICT);
        const new_subCategory = await this.subCategoryService.create(data);
        return {
            subCategory: new_subCategory,
            message: `Sous-catégorie créée`
        };
    }
    async findAll() {
        const subCategories = await this.subCategoryService.findAllSubCategoryNames();
        if (!subCategories)
            throw new common_1.HttpException(`La liste des sous-catégories n'a pas été trouvée`, common_1.HttpStatus.CONFLICT);
        return {
            subCategories,
            message: 'Liste des noms des sous-catégories',
        };
    }
    async findOneName(name) {
        const subCategory = await this.subCategoryService.findByFirstName(name);
        if (!subCategory)
            throw new common_1.HttpException(`La subcatégorie n'a pas été trouvée`, common_1.HttpStatus.CONFLICT);
        return {
            subCategory,
            message: `Sous-catégorie ${name}`
        };
    }
    async getSubCategoriesByCategoryName(categoryName) {
        try {
            const subCategoryNames = await this.subCategoryService.getAllSubCategoriesNamesByCategoryName(categoryName);
            return {
                subCategories: subCategoryNames,
                message: `Liste des sous-catégories pour la catégorie avec l'id: ${categoryName}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    async update(id, updateSubCategoryDto) {
        const subCategory = await this.subCategoryService.findByUnique({ id });
        if (!subCategory)
            throw new common_1.HttpException(`La sous-catégorie n'a pas été trouvée`, common_1.HttpStatus.CONFLICT);
        const subCategoryUpdate = await this.subCategoryService.update({ id }, updateSubCategoryDto);
        return {
            subCategory: subCategoryUpdate,
            message: `La sous-catégorie avec l'id ${id} a bien été mise à jour`
        };
    }
    async remove(id) {
        const subCategory = await this.subCategoryService.findByUnique({ id });
        if (!subCategory)
            throw new common_1.HttpException(`La sous-catégorie n'a pas été trouvée`, common_1.HttpStatus.CONFLICT);
        this.subCategoryService.delete({ id });
        return {
            message: `La sous-catégorie avec l'id ${id} a bien été supprimée`
        };
    }
};
exports.SubCategoryController = SubCategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subCategory_dto_1.CreateSubCategoryDto]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "findOneName", null);
__decorate([
    (0, common_1.Get)(':categoryName'),
    __param(0, (0, common_1.Param)('categoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "getSubCategoriesByCategoryName", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subCategory_dto_1.UpdateSubCategoryDto]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "remove", null);
exports.SubCategoryController = SubCategoryController = __decorate([
    (0, common_2.UseGuards)(jwt_guards_1.AuthGuard),
    (0, common_1.Controller)('subCategories'),
    __metadata("design:paramtypes", [subCategory_service_1.SubCategoryService])
], SubCategoryController);
//# sourceMappingURL=subCategory.controller.js.map