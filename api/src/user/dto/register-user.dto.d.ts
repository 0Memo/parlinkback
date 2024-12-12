import { CreateChildDto } from 'src/child/dto/create-child.dto';
import { CreateUserDto } from './create-user.dto';
export declare class RegisterUserDto {
    user: CreateUserDto;
    subjects: string[];
    children?: [CreateChildDto] | null;
}
