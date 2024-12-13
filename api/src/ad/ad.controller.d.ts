import { AdService } from './ad.service';
import { Ad, Prisma, UserHasAds } from '@prisma/client';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { UserService } from '../user/user.service';
import { GetAdsFilterDto } from './dto/get-ads-filter.dto';
import { GetAdsCategoryDto } from './dto/get-ads-category.dto';
import { GetAdsUserDto } from './dto/get-ads-user.dto';
import { PaginatorQueryInterface } from '../interfaces/paginator';
import { ResponseAdPromiseInterface, ResponseAdsPromiseInterface } from './interface/response.interface';
export declare class AdController {
    private readonly adService;
    private readonly userService;
    constructor(adService: AdService, userService: UserService);
    findAll(options: PaginatorQueryInterface): ResponseAdsPromiseInterface;
    findAllByFilters({ search }: GetAdsFilterDto): ResponseAdsPromiseInterface;
    findAllByCategories(categoryParams: GetAdsCategoryDto): ResponseAdsPromiseInterface;
    findAllByUser({ id }: GetAdsUserDto): Promise<{
        userAds: Ad[];
        message: string;
    }>;
    readRoute(id: string): ResponseAdPromiseInterface;
    create(data: CreateAdDto): ResponseAdPromiseInterface;
    updateRoute(id: string, adUpdateDto: UpdateAdDto): ResponseAdPromiseInterface;
    deleteRoute(id: string): Promise<{
        message: string;
    }>;
    subscribeUserToAd(adId: string, { userId }: {
        userId: string;
    }): Promise<{
        subscription: UserHasAds;
        message: string;
    }>;
    getSubscriptionsByUserId(userId: string): Promise<{
        subscriptions: UserHasAds[];
        message: string;
    }>;
    getSubscriptionsByUserParams(userId: string, params: {
        title?: string;
        city?: string;
    }): Promise<{
        subscriptions: UserHasAds[];
        message: string;
    }>;
    updateUserAdSubscription(userId: string, adId: string, updateData: Prisma.UserHasAdsUpdateInput): Promise<{
        subscription: UserHasAds;
        message: string;
    }>;
    deleteUserAdSubscription(userId: string, adId: string): Promise<{
        message: string;
    }>;
}
