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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHasChildService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const library_1 = require("@prisma/client/runtime/library");
const prisma_errors_1 = require("../../prisma/prisma.errors");
let UserHasChildService = class UserHasChildService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(inputDto) {
        try {
            const out = await this.prisma.userHasChildren.create({
                data: inputDto
            });
            return out;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                const errorMessage = prisma_errors_1.PRISMA_ERRORS[error.code]
                    ? `Prisma error-${error.code}: ${prisma_errors_1.PRISMA_ERRORS[error.code]}`
                    : `Unexpected error: ${error.message}`;
                return errorMessage;
            }
            return `Unexpected error: ${error.message}`;
        }
    }
    async deleteByUserId(userId) {
        try {
            await this.prisma.userHasChildren.deleteMany({
                where: { userId: userId
                }
            });
            let message = 'UserHasChildren records deleted for user ID';
            return { message: message };
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                const errorMessage = prisma_errors_1.PRISMA_ERRORS[error.code]
                    ? `Prisma error-${error.code}: ${prisma_errors_1.PRISMA_ERRORS[error.code]}`
                    : `Unexpected error: ${error.message}`;
                return { message: errorMessage };
            }
            let message = `Unexpected error: ${error.message}`;
            return { message: message };
        }
    }
    async delete(where) {
        try {
            const output = await this.prisma.child.delete({
                where,
            });
            return output;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                const errorMessage = prisma_errors_1.PRISMA_ERRORS[error.code] ? `Prisma error-${error.code}: ${prisma_errors_1.PRISMA_ERRORS[error.code]}` : `Unexpected error: ${error.message}`;
                return errorMessage;
            }
            return `Unexpected error: ${error.message}`;
        }
    }
};
exports.UserHasChildService = UserHasChildService;
exports.UserHasChildService = UserHasChildService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserHasChildService);
//# sourceMappingURL=userHasChild.service.js.map