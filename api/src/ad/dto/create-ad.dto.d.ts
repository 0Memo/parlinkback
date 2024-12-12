import { Transport, AdStatus } from "@prisma/client";
export declare class CreateAdDto {
    title: string;
    description: string;
    startTime?: Date;
    endTime?: Date;
    duration?: number;
    address: string;
    postalCode: string;
    city: string;
    country: string;
    attendees?: number;
    transport?: Transport;
    conform?: boolean;
    status?: AdStatus;
    adPicture?: string;
    userId: string;
    categoryId: string;
    subCategoryId: string;
    adHasFile?: null;
    userHasAd?: null;
}
