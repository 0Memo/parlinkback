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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
const jwt_guards_1 = require("../guards/jwt.guards");
const common_2 = require("@nestjs/common");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async create(data) {
        const category = await this.categoryService.findByUnique({
            name: data.name,
            id: ''
        });
        if (!category)
            throw new common_1.HttpException(`La catégorie n'existe pas`, common_1.HttpStatus.CONFLICT);
        const new_category = await this.categoryService.create(data);
        return {
            category: new_category,
            message: `Catégorie créée`
        };
    }
    async findAll() {
        const categories = await this.categoryService.findAllCategoryNames();
        if (!categories)
            throw new common_1.HttpException(`La liste de catégories n'a pas été trouvée`, common_1.HttpStatus.CONFLICT);
        return {
            categories,
            message: 'Liste des noms des catégories',
        };
    }
    async findOneName(name) {
        const category = await this.categoryService.findByFirstName(name);
        if (!category)
            throw new common_1.HttpException(`La catégorie n'a pas été trouvée`, common_1.HttpStatus.CONFLICT);
        return {
            category,
            message: `Catégorie ${name}`
        };
    }
    async findOne(id) {
        const category = await this.categoryService.findByUnique({ id });
        if (!category)
            throw new common_1.HttpException(`La catégorie n'a pas été trouvée`, common_1.HttpStatus.CONFLICT);
        return {
            category,
            message: `Catégorie avec l'id ${id}`
        };
    }
    async update(id, updateCategoryDto) {
        const category = await this.categoryService.findByUnique({ id });
        if (!category)
            throw new common_1.HttpException(`La catégorie n'a pas été trouvée`, common_1.HttpStatus.CONFLICT);
        const categoryUpdate = await this.categoryService.update({ id }, updateCategoryDto);
        return {
            category: categoryUpdate,
            message: `La catégorie avec l'id ${id} a bien été mise à jour`
        };
    }
    async remove(id) {
        const category = await this.categoryService.findByUnique({ id });
        if (!category)
            throw new common_1.HttpException(`La catégorie n'a pas été trouvée`, common_1.HttpStatus.CONFLICT);
        this.categoryService.delete({ id });
        return {
            message: `La catégorie avec l'id ${id} a bien été supprimée`
        };
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findOneName", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "remove", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_2.UseGuards)(jwt_guards_1.AuthGuard),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map