import { ProfileService } from './profile.service';
import { Profile } from '@prisma/client';
import { UserService } from '../user/user.service';
export declare class ProfileController {
    private readonly profileService;
    private readonly userService;
    constructor(profileService: ProfileService, userService: UserService);
    findAllByParams(options: {
        skip?: string;
        take?: string;
    }): Promise<Profile[]>;
    create(): Promise<string>;
}
