/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import { CustomException } from '../exceptions/custom.exception';

//TODO: CREATE USER + CREATE PROFILE --> SIGNUP | REGISTER  --> ASYNC CREATE() ??
//TODO: DELETE USER + DELETE PROFILE --> DELETE | REMOVE
//TODO: READ USER BY ID
//TODO: READ ALL USERS

//TODO: USER PASSWORD UPDATE
//TODO: USER PROFILE UPDATE

//TODO: READ USER BY CURRENT USER ID

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllByParams(@Query() options: {skip?: string, take?: string }): Promise<User[]> {
    const new_options: Prisma.UserFindManyArgs = {}
    options.skip? new_options.skip = +options.skip : null
    options.take? new_options.take = +options.take : null

    return this.userService.findAllByParams(new_options);
  }

  @Post()
    async create(
      @Param('id') id: string,
      @Body() data: CreateUserDto): Promise<{ user: User, message: string}> {
        const user = await this.userService.findByUnique({email: data.email
        });

        if(user) throw new CustomException('L\'utilisateur existe déjà', HttpStatus.CONFLICT, "UC-create-1")
        const new_user =  await this.userService.create(data);
        delete new_user.password

        const message = `Utilisateur créé`;

        return {
          user: new_user,
          message
        }
  }

  @Get(':id')
  async readRoute(
      @Param('id') id: string,
  ): Promise<{user: User, message: string}> {
  
    const user = await this.userService.findByUnique({ id });

    if (!user) throw new HttpException('L\'utilisateur n\'a pas été trouvé', HttpStatus.CONFLICT)
    
    const message = `Utilisateur avec l\'id ${id}`;
    return {
      user,
      message
    };
  }

  @Put(':id')
  async updateRoute(
      @Param('id') id: string,
      @Body() userUpdateDto: UpdateUserDto,
  ): Promise<{user: User, message: string}> {
      const user = await this.userService.findByUnique({ id });
      
      if (!user) throw new HttpException('L\'utilisateur n\'a pas été trouvé', HttpStatus.CONFLICT)

      const user_email = await this.userService.findByUnique({
        email: userUpdateDto.email
      });

      if(!user_email) throw new HttpException('L\'utilisateur n\'a pas été trouvé', HttpStatus.CONFLICT)

      const userUpdate = await this.userService.update({ id }, userUpdateDto);

      delete userUpdate.password;

      const message = `L'utilisateur avec l'id ${id} a bien été mis à jour`;

      return {
        user: userUpdate,
        message
      }
  }

  @Delete(':id')
    async deleteRoute(@Param('id') id: string,): Promise<User | { message: string }> {
      
        const user = await this.userService.findByUnique({ id })

        if (!user) throw new HttpException('L\'utilisateur n\'a pas été trouvé', HttpStatus.CONFLICT)

        this.userService.delete({id });

        return { message: `L'utilisateur avec l'id ${ id } a bien été supprimé` }
    }
}