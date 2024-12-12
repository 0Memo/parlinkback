import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from '@prisma/client';
export declare class FileController {
    private readonly service;
    private readonly dataName;
    constructor(service: FileService);
    create(inputDto: CreateFileDto): Promise<{
        [key: string]: File | string;
    }>;
    findAllByParams(query: {
        skip?: string;
        take?: string;
    }): Promise<{
        [key: string]: File[] | string;
    }>;
    readRoute(id: string): Promise<{
        [key: string]: File | string;
    }>;
    update(id: string, inputDto: UpdateFileDto): Promise<{
        [key: string]: File | string;
    }>;
    remove(id: string): Promise<{
        file?: File;
        message: string;
    }>;
}
