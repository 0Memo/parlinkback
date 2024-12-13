"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const user_service_1 = require("../user/user.service");
const createAdmin_dto_1 = require("./dto/createAdmin.dto");
const changePassword_dto_1 = require("./dto/changePassword.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const custom_exception_1 = require("../../src/exceptions/custom.exception");
const refresh_jwt_guards_1 = require("../guards/refresh.jwt.guards");
const getToken_decorator_1 = require("../guards/getToken.decorator");
let AuthController = class AuthController {
    constructor(authService, userService, jwtService) {
        this.authService = authService;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signup(data) {
        let messages = [];
        const role = "admin";
        console.log(data);
        const user = await this.userService.findByUnique({ email: data.email });
        if (user)
            throw new custom_exception_1.CustomException(`L'utilisateur existe déjà`, common_1.HttpStatus.CONFLICT, "UC-create-1");
        const passwordIni = await this.authService.hash(this.authService.generateRandomPassword(10));
        const a = { ...data, password: passwordIni, role: role };
        console.log("a", a);
        const userAdmin = await this.userService.create({ ...data, password: passwordIni, role: role });
        messages = [...messages, `🚀 New user ${userAdmin.firstName} ${userAdmin.lastName} was created`];
        return {
            user: userAdmin,
            messages
        };
    }
    async updatePswd(data) {
        console.log(data);
        const user = await this.userService.findByUnique({ email: data.email });
        console.log(user);
        if (!user) {
            throw new common_1.HttpException(`L'utilisateur  n'a pas été trouvé ${data.email}`, common_1.HttpStatus.NOT_FOUND);
        }
        if (data.code === user.password) {
            data.password = await this.authService.hash(data.password);
        }
        const id = user.id;
        const userUpdate = await this.userService.update({ id }, { password: data.password });
        delete userUpdate.password;
        return {
            user: userUpdate,
            message: `L'utilisateur avec ${data.email} a bien été mis à jour`,
        };
    }
    async login(data) {
        console.log('Login attempt received:', data);
        try {
            const user = await this.userService.findByUnique({ email: data.email });
            if (!user)
                throw new common_1.HttpException('Erreur: identifiants incorrects', common_1.HttpStatus.UNAUTHORIZED);
            const isValid = await bcrypt.compare(data.password, user.password);
            if (!isValid)
                throw new common_1.HttpException(`Erreur : Identifiants incorrects`, common_1.HttpStatus.UNAUTHORIZED);
            const payload = { userId: user.id, role: user.role };
            delete user.password;
            const access_token = await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET, expiresIn: '1d' });
            const refresh_token = await this.jwtService.signAsync(payload, { secret: process.env.JWT_REFRESH_TOKEN, expiresIn: '1d' });
            await this.userService.update({ id: payload.userId }, { refreshToken: refresh_token });
            console.log("Login successful for user:", user.email);
            return {
                access_token,
                refresh_token,
                message: `Vous êtes bien connecté`,
            };
        }
        catch (error) {
            console.error(`Erreur de connexion:`, error.message, error.stack);
            throw error;
        }
    }
    async updateRoute(id, data) {
        const user = await this.userService.findByUnique({ id });
        if (!user) {
            throw new common_1.HttpException(`L'utilisateur n'a pas été trouvé`, common_1.HttpStatus.NOT_FOUND);
        }
        if (data.password) {
            data.password = await this.authService.hash(data.password);
        }
        const userUpdate = await this.userService.update({ id }, { password: data.password });
        delete userUpdate.password;
        return {
            user: userUpdate,
            message: `L'utilisateur avec l'id ${id} a bien été mis à jour`,
        };
    }
    async refreshTokens(refresh_token_in) {
        if (!refresh_token_in) {
            throw new common_1.UnauthorizedException('No refresh token provided', refresh_token_in);
        }
        const user = await this.userService.findByRefreshToken(refresh_token_in);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid refresh token', refresh_token_in);
        }
        const payload = { userId: user.id, role: user.role };
        const access_token = await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET, expiresIn: '2m' });
        const refresh_token = await this.jwtService.signAsync(payload, { secret: process.env.JWT_REFRESH_TOKEN, expiresIn: '7d' });
        this.userService.update({ id: payload.userId }, { refreshToken: refresh_token });
        delete user.password;
        delete user.refreshToken;
        return {
            access_token,
            refresh_token,
            message: 'Refresh token OK',
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createAdmin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Put)('mdp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [changePassword_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updatePswd", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, changePassword_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateRoute", null);
__decorate([
    (0, common_1.UseGuards)(refresh_jwt_guards_1.AuthRefreshGuard),
    (0, common_1.Post)('refresh_token'),
    __param(0, (0, getToken_decorator_1.GetToken)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService,
        jwt_1.JwtService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map