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
exports.UserHasSubjectService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const library_1 = require("@prisma/client/runtime/library");
const prisma_errors_1 = require("../../prisma/prisma.errors");
let UserHasSubjectService = class UserHasSubjectService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(inputDto) {
        try {
            const userHasSubject = await this.prisma.userHasSubjects.create({
                data: inputDto
            });
            let message = 'UserHasSubject created';
            return { userHasSubject, message: message };
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
    async delete(inputDto) {
        try {
            const { userId, subjectId } = inputDto;
            await this.prisma.userHasSubjects.delete({
                where: {
                    userId_subjectId: { userId, subjectId }
                }
            });
            let message = 'UserHasSubject deleted';
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
    async deleteByUserId(userId) {
        try {
            await this.prisma.userHasSubjects.deleteMany({
                where: { userId: userId
                }
            });
            let message = 'UserHasSubject records deleted for user ID';
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
};
exports.UserHasSubjectService = UserHasSubjectService;
exports.UserHasSubjectService = UserHasSubjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserHasSubjectService);
//# sourceMappingURL=userHasSubject.service.js.map