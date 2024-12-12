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
exports.ChildService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const library_1 = require("@prisma/client/runtime/library");
const prisma_errors_1 = require("../../prisma/prisma.errors");
let ChildService = class ChildService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(inputDto) {
        try {
            const out = await this.prisma.child.create({
                data: inputDto
            });
            let message = 'Un enfant a été crée';
            return { child: out, message: message };
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
    async findAllByParams(options) {
        try {
            return await this.prisma.child.findMany(options);
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                const errorMessage = prisma_errors_1.PRISMA_ERRORS[error.code] ? `Prisma error-${error.code}: ${prisma_errors_1.PRISMA_ERRORS[error.code]}` : `Unexpected error: ${error.message}`;
                return errorMessage;
            }
            return `Unexpected error: ${error.message}`;
        }
    }
    async findAllByFilters(data) {
        return this.prisma.child.findMany({
            where: {
                AND: [
                    {
                        firstName: { contains: data.firstName }
                    },
                    {
                        lastName: { contains: data.lastName }
                    },
                    {
                        class: { contains: data.class }
                    },
                    {
                        school: { contains: data.school }
                    }
                ]
            }
        });
    }
    async findByUnique(whereUniqueInput) {
        try {
            const out = await this.prisma.child.findUnique({
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
            const out = await this.prisma.child.update({
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
exports.ChildService = ChildService;
exports.ChildService = ChildService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChildService);
//# sourceMappingURL=child.service.js.map