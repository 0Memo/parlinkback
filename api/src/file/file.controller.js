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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("./file.service");
const create_file_dto_1 = require("./dto/create-file.dto");
const update_file_dto_1 = require("./dto/update-file.dto");
let FileController = class FileController {
    constructor(service) {
        this.service = service;
        this.dataName = 'file';
    }
    async create(inputDto) {
        const out = await this.service.create(inputDto);
        const message = 'Nouveau fichier créé';
        return {
            [this.dataName]: out,
            message,
        };
    }
    async findAllByParams(query) {
        const prismaOptions = {};
        if (query.skip)
            prismaOptions.skip = +query.skip;
        if (query.take)
            prismaOptions.take = +query.take;
        const out = await this.service.findAllByParams(prismaOptions);
        const message = `Tous les fichiers`;
        return {
            [this.dataName]: out,
            message
        };
    }
    async readRoute(id) {
        const out = await this.service.findByUnique({ id });
        if (!out)
            throw new common_1.HttpException(`Le sujet n'a pas été trouvé`, common_1.HttpStatus.CONFLICT);
        const message = `Fichier avec l'id ${id}`;
        return {
            [this.dataName]: out,
            message
        };
    }
    async update(id, inputDto) {
        const out = await this.service.update({ id }, inputDto);
        const message = `Le fichier avec l'id ${id} a été mis à jour`;
        return {
            [this.dataName]: out,
            message
        };
    }
    async remove(id) {
        const file = await this.service.findByUnique({ id });
        if (!file) {
            throw new common_1.HttpException(`Le sujet n'a pas été trouvé`, common_1.HttpStatus.NOT_FOUND);
        }
        const result = await this.service.delete({ id });
        if (typeof result === 'string') {
            throw new common_1.HttpException(result, common_1.HttpStatus.CONFLICT);
        }
        const message = `Le fichier avec l'id ${id} a été supprimé`;
        return { file: result, message };
    }
};
exports.FileController = FileController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_file_dto_1.CreateFileDto]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "findAllByParams", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "readRoute", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_file_dto_1.UpdateFileDto]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "remove", null);
exports.FileController = FileController = __decorate([
    (0, common_1.Controller)('file'),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileController);
//# sourceMappingURL=file.controller.js.map