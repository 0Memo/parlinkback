import { UserGroupService } from './user-group.service';
import { CreateUserGroupDto } from './dto/create-user-group.dto';
import { UpdateUserGroupDto } from './dto/update-user-group.dto';
export declare class UserGroupController {
    private readonly userGroupService;
    constructor(userGroupService: UserGroupService);
    create(createUserGroupDto: CreateUserGroupDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserGroupDto: UpdateUserGroupDto): string;
    remove(id: string): string;
}
