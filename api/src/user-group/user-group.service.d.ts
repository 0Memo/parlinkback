import { CreateUserGroupDto } from './dto/create-user-group.dto';
import { UpdateUserGroupDto } from './dto/update-user-group.dto';
export declare class UserGroupService {
    create(createUserGroupDto: CreateUserGroupDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserGroupDto: UpdateUserGroupDto): string;
    remove(id: number): string;
}
