import { $Enums } from "@prisma/client";
export declare class CreateFileDto {
    filePath: string;
    fileType: $Enums.FileType;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}
