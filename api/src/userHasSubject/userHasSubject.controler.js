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
exports.UserHasSubjectController = void 0;
const common_1 = require("@nestjs/common");
const userHasSubject_service_1 = require("./userHasSubject.service");
const userHasSubjectdto_1 = require("./dto/userHasSubjectdto");
let UserHasSubjectController = class UserHasSubjectController {
    constructor(service) {
        this.service = service;
        this.dataName = 'subject';
    }
    async create(inputDto) {
        const new_user_has_subject = await this.service.create(inputDto);
        console.log(`🚀 User has subject : ${new_user_has_subject}`);
        return new_user_has_subject;
    }
    async delete(deleteUHSDto) {
        const result = await this.service.delete(deleteUHSDto);
        if (result.message.includes('error')) {
            throw new common_1.HttpException(result.message, common_1.HttpStatus.BAD_REQUEST);
        }
        return result;
    }
    async deleteByUserId(userId) {
        try {
            const result = await this.service.deleteByUserId(userId);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.UserHasSubjectController = UserHasSubjectController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userHasSubjectdto_1.CreateUHSDto]),
    __metadata("design:returntype", Promise)
], UserHasSubjectController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userHasSubjectdto_1.CreateUHSDto]),
    __metadata("design:returntype", Promise)
], UserHasSubjectController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)('delete/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserHasSubjectController.prototype, "deleteByUserId", null);
exports.UserHasSubjectController = UserHasSubjectController = __decorate([
    (0, common_1.Controller)('uhs'),
    __metadata("design:paramtypes", [userHasSubject_service_1.UserHasSubjectService])
], UserHasSubjectController);
//# sourceMappingURL=userHasSubject.controler.js.map