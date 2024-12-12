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
exports.ChildController = void 0;
const common_1 = require("@nestjs/common");
const child_service_1 = require("./child.service");
const create_child_dto_1 = require("./dto/create-child.dto");
const update_child_dto_1 = require("./dto/update-child.dto");
let ChildController = class ChildController {
    constructor(service) {
        this.service = service;
        this.dataName = 'child';
    }
    async create(inputDto) {
        const out = await this.service.create(inputDto);
        const message = `Un nouvel enfant a été créé`;
        console.log(`message`, message);
        return out;
    }
    async findAllByParams(query) {
        const prismaOptions = {};
        if (query.skip)
            prismaOptions.skip = +query.skip;
        if (query.take)
            prismaOptions.take = +query.take;
        const out = await this.service.findAllByParams(prismaOptions);
        const message = `Tous les enfants`;
        return {
            [this.dataName]: out,
            message
        };
    }
    async findAllByfilter(element) {
        console.log("🚀 ~ ChildController ~ findAllByfilter ~ element:", element);
        const out = await this.service.findAllByFilters(element);
        const message = `Tous les enfants`;
        return {
            [this.dataName]: out,
            message
        };
    }
    async readRoute(id) {
        const out = await this.service.findByUnique({ id });
        if (!out)
            throw new common_1.HttpException(`Le sujet n'a pas été trouvé`, common_1.HttpStatus.CONFLICT);
        const message = `Enfant avec l'id ${id}`;
        return {
            [this.dataName]: out,
            message
        };
    }
    async update(id, inputDto) {
        const out = await this.service.update({ id }, inputDto);
        const message = `L'enfant avec l'id ${id} a été mis à jour`;
        return {
            [this.dataName]: out,
            message
        };
    }
    async remove(id) {
        const child = await this.service.findByUnique({ id });
        if (!child) {
            throw new common_1.HttpException(`Le sujet n'a pas été trouvé`, common_1.HttpStatus.NOT_FOUND);
        }
        const result = await this.service.delete({ id });
        if (typeof result === 'string') {
            throw new common_1.HttpException(result, common_1.HttpStatus.CONFLICT);
        }
        const message = `Child avec l'id ${id} a été supprimé`;
        return { child: result, message };
    }
};
exports.ChildController = ChildController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_child_dto_1.CreateChildDto]),
    __metadata("design:returntype", Promise)
], ChildController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChildController.prototype, "findAllByParams", null);
__decorate([
    (0, common_1.Get)('one'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_child_dto_1.CreateChildDto]),
    __metadata("design:returntype", Promise)
], ChildController.prototype, "findAllByfilter", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChildController.prototype, "readRoute", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_child_dto_1.UpdateChildDto]),
    __metadata("design:returntype", Promise)
], ChildController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChildController.prototype, "remove", null);
exports.ChildController = ChildController = __decorate([
    (0, common_1.Controller)('child'),
    __metadata("design:paramtypes", [child_service_1.ChildService])
], ChildController);
//# sourceMappingURL=child.controller.js.map