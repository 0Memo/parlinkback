"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const profile_module_1 = require("./profile/profile.module");
const child_module_1 = require("./child/child.module");
const ad_module_1 = require("./ad/ad.module");
const file_module_1 = require("./file/file.module");
const category_module_1 = require("./category/category.module");
const subject_module_1 = require("./subject/subject.module");
const user_group_module_1 = require("./user-group/user-group.module");
const message_module_1 = require("./message/message.module");
const auth_module_1 = require("./auth/auth.module");
const cache_module_1 = require("./cache/cache.module");
const config_1 = require("@nestjs/config");
const userHasSubject_module_1 = require("./userHasSubject/userHasSubject.module");
const subCategory_module_1 = require("./subCategory/subCategory.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            profile_module_1.ProfileModule,
            child_module_1.ChildModule,
            ad_module_1.AdModule,
            file_module_1.FileModule,
            category_module_1.CategoryModule,
            subject_module_1.SubjectModule,
            user_group_module_1.UserGroupModule,
            message_module_1.MessageModule,
            cache_module_1.AppCacheModule,
            subCategory_module_1.SubCategoryModule,
            userHasSubject_module_1.UserHasSubjectModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map