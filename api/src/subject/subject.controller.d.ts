import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from '@prisma/client';
export declare class SubjectController {
    private readonly service;
    private readonly dataName;
    constructor(service: SubjectService);
    create(inputDto: CreateSubjectDto): Promise<{
        [key: string]: Subject | string;
    }>;
    findAllByParams(query: {
        skip?: string;
        take?: string;
        name?: string;
    }): Promise<{
        [key: string]: Subject[] | string;
    }>;
    findByName(subName: string, res: Response): Promise<string | {
        name: string;
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
    }>;
    readRoute(id: string): Promise<{
        [key: string]: Subject | string;
    }>;
    update(id: string, inputDto: UpdateSubjectDto): Promise<{
        [key: string]: Subject | string;
    }>;
    remove(id: string): Promise<{
        subject?: Subject;
        message: string;
    }>;
}
