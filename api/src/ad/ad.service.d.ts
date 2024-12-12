import { Ad, Prisma, UserHasAds } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { GetAdsCategoryDto } from './dto/get-ads-category.dto';
import { AdCreateForeignKeyInterface, AdCreateInputInterface } from './interface/ad.interface';
export declare class AdService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: AdCreateInputInterface, foreignKeys: AdCreateForeignKeyInterface): Promise<Ad>;
    findAll(): Promise<Ad[]>;
    findAllByParams(options: Prisma.AdFindManyArgs): Promise<Ad[]>;
    findAllByFilters(query: string): Promise<Ad[]>;
    findAllByCategories({ categoryName, subCategoryName }: GetAdsCategoryDto): Promise<Ad[]>;
    findAllByUser(userId: string): Promise<Ad[]>;
    findByUnique(adWhereUniqueInput: Prisma.AdWhereUniqueInput): Promise<Ad | null>;
    exist(adWhereUniqueInput: Prisma.AdWhereUniqueInput): Promise<boolean>;
    update(where: Prisma.AdWhereUniqueInput, data: Prisma.AdUpdateInput): Promise<Ad>;
    delete(where: Prisma.AdWhereUniqueInput): Promise<Ad>;
    subscribeUserToAd(userId: string, adId: string): Promise<UserHasAds>;
    getAllSubscriptionsByUserId(userId: string): Promise<UserHasAds[]>;
    getAllSubscriptionsByUserParams(userId: string, params: {
        title?: string;
        city?: string;
    }): Promise<UserHasAds[]>;
    updateUserAdSubscription(userId: string, adId: string, data: Prisma.UserHasAdsUpdateInput): Promise<UserHasAds>;
    deleteUserAdSubscription(userId: string, adId: string): Promise<UserHasAds>;
}
