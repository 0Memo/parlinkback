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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const getToken_decorator_1 = require("../guards/getToken.decorator");
const jwt_decode_1 = require("jwt-decode");
const custom_exception_1 = require("../../src/exceptions/custom.exception");
const register_user_dto_1 = require("../user/dto/register-user.dto");
const subject_service_1 = require("../subject/subject.service");
const child_service_1 = require("../child/child.service");
const userHasChild_service_1 = require("../child/userHasChild.service");
const userHasSubject_service_1 = require("../userHasSubject/userHasSubject.service");
const jwt_guards_1 = require("../guards/jwt.guards");
const admin_jwt_guards_1 = require("../guards/admin.jwt.guards");
let UserController = class UserController {
    constructor(userService, authService, jwtService, subjectService, childService, uhcService, userHasSubjectService) {
        this.userService = userService;
        this.authService = authService;
        this.jwtService = jwtService;
        this.subjectService = subjectService;
        this.childService = childService;
        this.uhcService = uhcService;
        this.userHasSubjectService = userHasSubjectService;
    }
    async signup(data) {
        let messages = [];
        const mail = data.user.email;
        const user = await this.userService.findByUnique({ email: mail });
        if (user)
            throw new custom_exception_1.CustomException(`L'utilisateur existe déjà`, common_1.HttpStatus.CONFLICT, "UC-create-1");
        const passwordIni = await this.authService.hash(this.authService.generateRandomPassword(10));
        const new_user = await this.userService.create({ ...data.user, password: passwordIni });
        messages = [...messages, `🚀 Le nouvel utilisateur ${new_user.firstName} ${new_user.lastName} a été créé`];
        if (data.subjects) {
            const subjects = data.subjects;
            await Promise.all(subjects.map(async (sub) => {
                const subject = await this.subjectService.findByUnique({
                    name: sub,
                    id: ""
                });
                if (subject) {
                    const new_user_has_subject = await this.userHasSubjectService.create({ userId: new_user.id, subjectId: subject["id"] });
                    messages = [...messages, `🚀 La matière ${sub} a été associée à ${new_user.firstName} ${new_user.lastName}`];
                    console.log(`🚀 Utilisateur a la matière : `, new_user_has_subject);
                }
                else {
                    messages = [...messages, `🚀 Le sujet ${sub} n'existe pas`];
                    console.log(`🚀 Le sujet "${sub}" n'existe pas`);
                }
            }));
        }
        if (data.children) {
            const children = data.children;
            await Promise.all(children.map(async (element) => {
                const out = await this.childService.findAllByFilters(element);
                let child = out[0];
                if (!child) {
                    const childOut = await this.childService.create(element);
                    messages = [...messages, `🚀 Enfant créé: ${childOut.child.firstName} ${childOut.child.lastName}`];
                    console.log(`🚀 Enfant:créé`, childOut);
                    child = childOut.child;
                }
                const new_user_has_child = await this.uhcService.create({ userId: new_user.id, childId: child.id });
                messages = [...messages, `🚀 ${new_user.firstName} ${new_user.lastName} a l'enfant: ${child.firstName} ${child.lastName}`];
                console.log(`🚀 Utilisateur a l'enfant:créé`, new_user_has_child);
            }));
        }
        return {
            user: new_user,
            messages
        };
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
    async logout(token) {
        console.log(token);
        if (!token) {
            throw new common_1.UnauthorizedException(`Accès refusé: Token non trouvé`);
        }
        let tokenDecode;
        try {
            tokenDecode = (0, jwt_decode_1.jwtDecode)(token);
        }
        catch (error) {
            throw new common_1.UnauthorizedException(`Token invalide`);
        }
        const userId = tokenDecode.userId;
        const user = await this.userService.findByUnique({ id: userId });
        if (!user)
            throw new common_1.HttpException('Erreur: utilisateur non trouvé', common_1.HttpStatus.CONFLICT);
        this.userService.update({ id: user.id }, { refreshToken: '' });
        return { access_token: '',
            refresh_token: '',
            message: 'Vous avez bien été déconnecté'
        };
    }
    async getUsersWithDetails(query) {
        const prismaOptions = {};
        if (query.skip)
            prismaOptions.skip = +query.skip;
        if (query.take)
            prismaOptions.take = +query.take;
        return {
            users: await this.userService.getUsersWithDetails(prismaOptions),
            message: `Tous les utilisateurs avec les détails`,
        };
    }
    async readRoute(id) {
        const user = await this.userService.findByUnique({ id });
        const data = {
            firstName: user.firstName,
            lastName: user.lastName,
        };
        if (!user)
            throw new common_1.HttpException(`L'utilisateur n'a pas été trouvé`, common_1.HttpStatus.CONFLICT);
        return { data,
            message: `Utilisateur avec l'id ${id}`,
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.UseGuards)(admin_jwt_guards_1.AdminGuard),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('signout'),
    __param(0, (0, getToken_decorator_1.GetToken)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsersWithDetails", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "readRoute", null);
exports.UserController = UserController = __decorate([
    (0, common_1.UseGuards)(jwt_guards_1.AuthGuard),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService,
        jwt_1.JwtService,
        subject_service_1.SubjectService,
        child_service_1.ChildService,
        userHasChild_service_1.UserHasChildService,
        userHasSubject_service_1.UserHasSubjectService])
], UserController);
//# sourceMappingURL=user.controller.js.map