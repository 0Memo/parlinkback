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
exports.UserGroupController = void 0;
const common_1 = require("@nestjs/common");
const user_group_service_1 = require("./user-group.service");
const create_user_group_dto_1 = require("./dto/create-user-group.dto");
const update_user_group_dto_1 = require("./dto/update-user-group.dto");
let UserGroupController = class UserGroupController {
    constructor(userGroupService) {
        this.userGroupService = userGroupService;
    }
    create(createUserGroupDto) {
        return this.userGroupService.create(createUserGroupDto);
    }
    findAll() {
        return this.userGroupService.findAll();
    }
    findOne(id) {
        return this.userGroupService.findOne(+id);
    }
    update(id, updateUserGroupDto) {
        return this.userGroupService.update(+id, updateUserGroupDto);
    }
    remove(id) {
        return this.userGroupService.remove(+id);
    }
};
exports.UserGroupController = UserGroupController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_group_dto_1.CreateUserGroupDto]),
    __metadata("design:returntype", void 0)
], UserGroupController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserGroupController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserGroupController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_group_dto_1.UpdateUserGroupDto]),
    __metadata("design:returntype", void 0)
], UserGroupController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserGroupController.prototype, "remove", null);
exports.UserGroupController = UserGroupController = __decorate([
    (0, common_1.Controller)('user-group'),
    __metadata("design:paramtypes", [user_group_service_1.UserGroupService])
], UserGroupController);
//# sourceMappingURL=user-group.controller.js.map