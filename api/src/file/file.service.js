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
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const library_1 = require("@prisma/client/runtime/library");
const prisma_errors_1 = require("../../prisma/prisma.errors");
let FileService = class FileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(inputDto) {
        try {
            const out = await this.prisma.file.create({
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
    async findAllByParams(options) {
        try {
            return await this.prisma.file.findMany(options);
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                const errorMessage = prisma_errors_1.PRISMA_ERRORS[error.code] ? `Prisma error-${error.code}: ${prisma_errors_1.PRISMA_ERRORS[error.code]}` : `Unexpected error: ${error.message}`;
                return errorMessage;
            }
            return `Unexpected error: ${error.message}`;
        }
    }
    async findByUnique(whereUniqueInput) {
        try {
            const out = await this.prisma.file.findUnique({
                where: whereUniqueInput,
            });
            return out;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                const errorMessage = prisma_errors_1.PRISMA_ERRORS[error.code] ? `Prisma error-${error.code}: ${prisma_errors_1.PRISMA_ERRORS[error.code]}` : `Unexpected error: ${error.message}`;
                return errorMessage;
            }
            return `Unexpected error: ${error.message}`;
        }
    }
    async update(where, data) {
        try {
            const out = await this.prisma.file.update({
                where,
                data,
            });
            return out;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                const errorMessage = prisma_errors_1.PRISMA_ERRORS[error.code] ? `Prisma error-${error.code}: ${prisma_errors_1.PRISMA_ERRORS[error.code]}` : `Unexpected error: ${error.message}`;
                return errorMessage;
            }
            return `Unexpected error: ${error.message}`;
        }
    }
    async delete(where) {
        try {
            const output = await this.prisma.file.delete({
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
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FileService);
//# sourceMappingURL=file.service.js.map