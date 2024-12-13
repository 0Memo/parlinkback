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
exports.AdController = void 0;
const common_1 = require("@nestjs/common");
const ad_service_1 = require("./ad.service");
const client_1 = require("@prisma/client");
const create_ad_dto_1 = require("./dto/create-ad.dto");
const update_ad_dto_1 = require("./dto/update-ad.dto");
const user_service_1 = require("../user/user.service");
const jwt_guards_1 = require("../guards/jwt.guards");
const get_ads_filter_dto_1 = require("./dto/get-ads-filter.dto");
const get_ads_category_dto_1 = require("./dto/get-ads-category.dto");
const get_ads_user_dto_1 = require("./dto/get-ads-user.dto");
const response_utils_1 = require("../utils/response.utils");
let AdController = class AdController {
    constructor(adService, userService) {
        this.adService = adService;
        this.userService = userService;
    }
    async findAll(options) {
        return {
            ads: await this.adService.findAllByParams(options),
            message: (0, response_utils_1.responseCode)().success.event.filter
        };
    }
    async findAllByFilters({ search }) {
        return {
            ads: await this.adService.findAllByFilters(search),
            message: (0, response_utils_1.responseCode)().success.event.filter
        };
    }
    async findAllByCategories(categoryParams) {
        return {
            ads: await this.adService.findAllByCategories(categoryParams),
            message: (0, response_utils_1.responseCode)().success.event.filter
        };
    }
    async findAllByUser({ id }) {
        return {
            userAds: await this.adService.findAllByUser(id),
            message: (0, response_utils_1.responseCode)().success.event.filterUser
        };
    }
    async readRoute(id) {
        try {
            return {
                ad: await this.adService.findByUnique({ id }),
                message: (0, response_utils_1.responseCode)(id).success.event.byId
            };
        }
        catch (error) {
            throw new common_1.HttpException((0, response_utils_1.responseCode)(id).error.event.byId, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async create(data) {
        try {
            if (!await this.userService.exist(data.userId))
                throw new common_1.HttpException((0, response_utils_1.responseCode)(data.userId).error.event.user, common_1.HttpStatus.CONFLICT);
            const { userId, categoryId, subCategoryId, ...datas } = data;
            return {
                ad: await this.adService.create(datas, { userId, categoryId, subCategoryId }),
                message: (0, response_utils_1.responseCode)().success.event.create
            };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async updateRoute(id, adUpdateDto) {
        try {
            return {
                ad: await this.adService.update({ id }, adUpdateDto),
                message: (0, response_utils_1.responseCode)().success.event.update
            };
        }
        catch (error) {
            throw new common_1.HttpException((0, response_utils_1.responseCode)(id).error.event.update, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async deleteRoute(id) {
        const ad = await this.adService.delete({ id });
        if (!ad)
            throw new common_1.HttpException((0, response_utils_1.responseCode)(id).error.event.delete, common_1.HttpStatus.CONFLICT);
        return {
            message: (0, response_utils_1.responseCode)(id).success.event.delete
        };
    }
    async subscribeUserToAd(adId, { userId }) {
        const user = await this.userService.findByUnique({ id: userId });
        if (!user)
            throw new common_1.HttpException(`L'utilisateur n'existe pas`, common_1.HttpStatus.CONFLICT);
        const ad = await this.adService.findByUnique({ id: adId });
        if (!ad)
            throw new common_1.HttpException(`L'annonce n'existe pas`, common_1.HttpStatus.CONFLICT);
        const subscription = await this.adService.subscribeUserToAd(userId, adId);
        return {
            subscription,
            message: `L'utilisateur a été inscrit à l'annonce avec succès`
        };
    }
    async getSubscriptionsByUserId(userId) {
        const subscriptions = await this.adService.getAllSubscriptionsByUserId(userId);
        return {
            subscriptions,
            message: `Liste des inscriptions de l'utilisateur avec l'id ${userId}`
        };
    }
    async getSubscriptionsByUserParams(userId, params) {
        const subscriptions = await this.adService.getAllSubscriptionsByUserParams(userId, params);
        return {
            subscriptions,
            message: `List des annonces de l'utilisateur avec l'id ${userId} filtrées`
        };
    }
    async updateUserAdSubscription(userId, adId, updateData) {
        const subscription = await this.adService.updateUserAdSubscription(userId, adId, updateData);
        return {
            subscription,
            message: `Inscription avec l'id ${adId} pour l'utilisateur avec l'id ${userId} mise à jour correctement`
        };
    }
    async deleteUserAdSubscription(userId, adId) {
        await this.adService.deleteUserAdSubscription(userId, adId);
        return {
            message: `L'inscription à l'annonce ${adId} pour l'utilisateur avec l'id ${userId} a été supprimée`
        };
    }
};
exports.AdController = AdController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('params'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_ads_filter_dto_1.GetAdsFilterDto]),
    __metadata("design:returntype", Object)
], AdController.prototype, "findAllByFilters", null);
__decorate([
    (0, common_1.Get)('categories'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_ads_category_dto_1.GetAdsCategoryDto]),
    __metadata("design:returntype", Object)
], AdController.prototype, "findAllByCategories", null);
__decorate([
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_ads_user_dto_1.GetAdsUserDto]),
    __metadata("design:returntype", Promise)
], AdController.prototype, "findAllByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AdController.prototype, "readRoute", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ad_dto_1.CreateAdDto]),
    __metadata("design:returntype", Object)
], AdController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ad_dto_1.UpdateAdDto]),
    __metadata("design:returntype", Object)
], AdController.prototype, "updateRoute", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdController.prototype, "deleteRoute", null);
__decorate([
    (0, common_1.Post)('subscribe/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdController.prototype, "subscribeUserToAd", null);
__decorate([
    (0, common_1.Get)('subscriptions/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdController.prototype, "getSubscriptionsByUserId", null);
__decorate([
    (0, common_1.Get)('subscriptions/:userId/params'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdController.prototype, "getSubscriptionsByUserParams", null);
__decorate([
    (0, common_1.Put)('subscriptions/:userId/:adId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('adId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AdController.prototype, "updateUserAdSubscription", null);
__decorate([
    (0, common_1.Delete)('subscriptions/:userId/:adId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('adId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AdController.prototype, "deleteUserAdSubscription", null);
exports.AdController = AdController = __decorate([
    (0, common_1.UseGuards)(jwt_guards_1.AuthGuard),
    (0, common_1.Controller)('ad'),
    __metadata("design:paramtypes", [ad_service_1.AdService,
        user_service_1.UserService])
], AdController);
//# sourceMappingURL=ad.controller.js.map