"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const prisma_module_1 = require("../../prisma/prisma.module");
const cache_module_1 = require("../cache/cache.module");
const auth_service_1 = require("../auth/auth.service");
const child_service_1 = require("../child/child.service");
const userHasChild_service_1 = require("../child/userHasChild.service");
const subject_service_1 = require("../subject/subject.service");
const userHasSubject_service_1 = require("../userHasSubject/userHasSubject.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, cache_module_1.AppCacheModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, auth_service_1.AuthService, child_service_1.ChildService, userHasChild_service_1.UserHasChildService, subject_service_1.SubjectService, userHasSubject_service_1.UserHasSubjectService],
        exports: [user_service_1.UserService]
    })
], UserModule);
//# sourceMappingURL=user.module.js.map