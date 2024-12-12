import { ChildService } from './child.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { Child } from '@prisma/client';
export declare class ChildController {
    private readonly service;
    private readonly dataName;
    constructor(service: ChildService);
    create(inputDto: CreateChildDto): Promise<{
        child?: Child;
        message: string;
    }>;
    findAllByParams(query: {
        skip?: string;
        take?: string;
    }): Promise<{
        [key: string]: Child[] | string;
    }>;
    findAllByfilter(element: CreateChildDto): Promise<{
        [key: string]: Child[] | string;
    }>;
    readRoute(id: string): Promise<{
        [key: string]: Child | string;
    }>;
    update(id: string, inputDto: UpdateChildDto): Promise<{
        [key: string]: Child | string;
    }>;
    remove(id: string): Promise<{
        child?: Child;
        message: string;
    }>;
}
