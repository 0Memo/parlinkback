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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const prisma_errors_1 = require("../../prisma/prisma.errors");
const library_1 = require("@prisma/client/runtime/library");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        console.log(data);
        const user = await this.prisma.user.create({
            data: {
                role: data.role,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            }
        });
        console.log(`Utilisateur créé`, user);
        return user;
    }
    async findByFirstName(firstName) {
        return this.prisma.user.findFirst({
            where: {
                firstName: firstName
            },
        });
    }
    async findByPassword(password) {
        return this.prisma.user.findFirst({
            where: {
                password: password
            },
        });
    }
    async exist(id) {
        return !!await this.prisma.user.count({ where: { id } });
    }
    async findByUnique(userWhereUniqueInput) {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput
        });
    }
    async findByRefreshToken(refreshToken) {
        return this.prisma.user.findFirst({ where: {
                refreshToken
            }
        });
    }
    async findAllByParams(options) {
        try {
            return await this.prisma.user.findMany(options);
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                const errorMessage = prisma_errors_1.PRISMA_ERRORS[error.code] ? `Prisma error-${error.code}: ${prisma_errors_1.PRISMA_ERRORS[error.code]}` : `Unexpected error: ${error.message}`;
                return errorMessage;
            }
            return `Unexpected error: ${error.message}`;
        }
    }
    async getUsersWithDetails(options) {
        const users = await this.prisma.user.findMany({
            ...options,
            orderBy: {
                lastName: 'asc',
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
                role: true,
                userHasSubjects: {
                    select: {
                        subjects: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
                userHasChild: {
                    select: {
                        children: {
                            select: {
                                firstName: true,
                                lastName: true,
                                school: true,
                                class: true,
                            },
                        },
                    },
                },
                Profile: {
                    select: {
                        profilePicture: true,
                        city: true,
                        postalCode: true,
                        address: true,
                        phone: true,
                    }
                },
            },
        });
        return users;
    }
    async update(where, data) {
        return this.prisma.user.update({
            where,
            data,
        });
    }
    async delete(where) {
        return this.prisma.user.delete({
            where,
        });
    }
    async deleteByUserId(userId) {
        try {
            await this.prisma.user.delete({
                where: {
                    id: userId
                }
            });
            const message = 'UserHasSubject records deleted for user ID';
            return { message: message };
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                const errorMessage = prisma_errors_1.PRISMA_ERRORS[error.code]
                    ? `Prisma error-${error.code}: ${prisma_errors_1.PRISMA_ERRORS[error.code]}`
                    : `Unexpected error: ${error.message}`;
                return { message: errorMessage };
            }
            return {
                message: `Unexpected error: ${error.message}`,
            };
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map