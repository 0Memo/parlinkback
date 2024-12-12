import { Prisma, Profile } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllByParams(options: Prisma.ProfileFindManyArgs): Promise<Profile[]>;
    create(data: Prisma.ProfileCreateInput): Promise<Profile>;
    findByUnique(profileWhereUniqueInput: Prisma.ProfileWhereUniqueInput): Promise<Profile | null>;
    update(where: Prisma.ProfileWhereUniqueInput, data: Prisma.ProfileUpdateInput): Promise<Profile>;
    delete(where: Prisma.ProfileWhereUniqueInput): Promise<Profile>;
}
