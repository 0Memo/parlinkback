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
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const subject_service_1 = require("./subject.service");
const create_subject_dto_1 = require("./dto/create-subject.dto");
const update_subject_dto_1 = require("./dto/update-subject.dto");
const jwt_guards_1 = require("../guards/jwt.guards");
let SubjectController = class SubjectController {
    constructor(service) {
        this.service = service;
        this.dataName = 'subject';
    }
    async create(inputDto) {
        const out = await this.service.create(inputDto);
        return {
            [this.dataName]: out,
            message: `New subject was created`,
        };
    }
    async findAllByParams(query) {
        const prismaOptions = {
            where: {}
        };
        if (query.skip)
            prismaOptions.skip = +query.skip;
        if (query.take)
            prismaOptions.take = +query.take;
        if (query.name) {
            prismaOptions.where = {
                ...prismaOptions.where,
                name: {
                    contains: query.name
                }
            };
        }
        const out = await this.service.findAllByParams(prismaOptions);
        return {
            [this.dataName]: out,
            message: `Toutes les matières`,
        };
    }
    async findByName(subName, res) {
        const result = await this.service.findByUnique({
            name: subName,
            id: ''
        });
        return result;
    }
    async readRoute(id) {
        const out = await this.service.findByUnique({ id });
        if (!out)
            throw new common_1.HttpException(`Le sujet n'a pas été trouvé`, common_1.HttpStatus.CONFLICT);
        return {
            [this.dataName]: out,
            message: `Matière avec l'id ${id}`,
        };
    }
    async update(id, inputDto) {
        const out = await this.service.update({ id }, inputDto);
        return {
            [this.dataName]: out,
            message: `La matière avec l'id ${id} a été mise à jour`,
        };
    }
    async remove(id) {
        const subject = await this.service.findByUnique({ id });
        if (!subject) {
            throw new common_1.HttpException(`Le sujet n'a pas été trouvé`, common_1.HttpStatus.NOT_FOUND);
        }
        const result = await this.service.delete({ id });
        if (typeof result === 'string') {
            throw new common_1.HttpException(result, common_1.HttpStatus.CONFLICT);
        }
        return {
            subject: result,
            message: `La matière avec l'id ${id} a été supprimée`,
        };
    }
};
exports.SubjectController = SubjectController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subject_dto_1.CreateSubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "findAllByParams", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Response]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "readRoute", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subject_dto_1.UpdateSubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "remove", null);
exports.SubjectController = SubjectController = __decorate([
    (0, common_1.UseGuards)(jwt_guards_1.AuthGuard),
    (0, common_1.Controller)('subject'),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectController);
//# sourceMappingURL=subject.controller.js.map