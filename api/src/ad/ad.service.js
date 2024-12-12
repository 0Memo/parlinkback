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
exports.AdService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AdService = class AdService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, foreignKeys) {
        return await this.prisma.ad.create({
            data: {
                ...data,
                users: { connect: { id: foreignKeys.userId } },
                category: { connect: { id: foreignKeys.categoryId } },
                subCategory: { connect: { id: foreignKeys.subCategoryId } },
            }
        });
    }
    async findAll() {
        return this.prisma.ad.findMany();
    }
    async findAllByParams(options) {
        return this.prisma.ad.findMany({
            ...options,
            orderBy: {
                createdAt: 'desc',
            }
        });
    }
    async findAllByFilters(query) {
        return this.prisma.ad.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: query
                        }
                    },
                    {
                        city: {
                            contains: query
                        }
                    }
                ]
            }
        });
    }
    async findAllByCategories({ categoryName, subCategoryName }) {
        return this.prisma.ad.findMany({
            where: {
                OR: [
                    {
                        category: {
                            name: categoryName,
                        },
                    },
                    {
                        subCategory: {
                            name: subCategoryName,
                        },
                    },
                ],
            }
        });
    }
    async findAllByUser(userId) {
        return this.prisma.ad.findMany({
            where: {
                users: {
                    id: userId
                }
            }
        });
    }
    async findByUnique(adWhereUniqueInput) {
        return this.prisma.ad.findUnique({
            where: adWhereUniqueInput
        });
    }
    async exist(adWhereUniqueInput) {
        return !!await this.prisma.ad.count({
            where: adWhereUniqueInput
        });
    }
    async update(where, data) {
        return this.prisma.ad.update({
            where,
            data,
        });
    }
    async delete(where) {
        return this.prisma.ad.delete({
            where
        });
    }
    async subscribeUserToAd(userId, adId) {
        return this.prisma.userHasAds.create({
            data: {
                userId,
                adId,
                userAttendees: 1,
                status: 'true',
            },
        });
    }
    async getAllSubscriptionsByUserId(userId) {
        return this.prisma.userHasAds.findMany({
            where: {
                userId: userId,
            },
            include: {
                ads: true,
            },
        });
    }
    async getAllSubscriptionsByUserParams(userId, params) {
        return this.prisma.userHasAds.findMany({
            where: {
                userId: userId,
                ads: {
                    OR: [
                        { title: {
                                contains: params.title
                            }
                        },
                        { city: {
                                contains: params.city
                            }
                        },
                    ],
                },
            },
            include: {
                ads: true,
            },
        });
    }
    async updateUserAdSubscription(userId, adId, data) {
        return this.prisma.userHasAds.update({
            where: {
                userId_adId: { userId, adId },
            },
            data,
        });
    }
    async deleteUserAdSubscription(userId, adId) {
        return this.prisma.userHasAds.delete({
            where: {
                userId_adId: { userId, adId },
            },
        });
    }
};
exports.AdService = AdService;
exports.AdService = AdService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdService);
//# sourceMappingURL=ad.service.js.map