"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHasSubjectModule = void 0;
const common_1 = require("@nestjs/common");
const userHasSubject_service_1 = require("./userHasSubject.service");
const userHasSubject_controler_1 = require("./userHasSubject.controler");
const prisma_module_1 = require("../../prisma/prisma.module");
let UserHasSubjectModule = class UserHasSubjectModule {
};
exports.UserHasSubjectModule = UserHasSubjectModule;
exports.UserHasSubjectModule = UserHasSubjectModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [userHasSubject_controler_1.UserHasSubjectController],
        providers: [userHasSubject_service_1.UserHasSubjectService],
    })
], UserHasSubjectModule);
//# sourceMappingURL=userHasSubject.module.js.map