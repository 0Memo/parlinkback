/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

import { Prisma, Child } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PRISMA_ERRORS } from '../../prisma/prisma.errors';

@Injectable()
export class ChildService {
 

  constructor(
    private readonly prisma: PrismaService,
  
  ) {}
// inputDto doit avoir la meme structure que  Child de Promise sinon ça ne marche pas
  async create(inputDto: CreateChildDto): Promise<Child | string> {
    try {
      const out = await this.prisma.child.create({ 
        data: inputDto
      });
      return out;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        const errorMessage = PRISMA_ERRORS[error.code]
          ? `Prisma error-${error.code}: ${PRISMA_ERRORS[error.code]}`
          : `Unexpected error: ${error.message}`;
        return errorMessage;
      }
      return `Unexpected error: ${error.message}`;
    }
  }

  async findAllByParams(options: Prisma.ChildFindManyArgs): Promise<Child[] | string> {
    try {
      return await this.prisma.child.findMany(options);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        const errorMessage = PRISMA_ERRORS[error.code] ? `Prisma error-${error.code}: ${PRISMA_ERRORS[error.code]}` : `Unexpected error: ${error.message}`;
        return errorMessage;
      }
      return `Unexpected error: ${error.message}`;
    }
  }

  async findByUnique(whereUniqueInput: Prisma.ChildWhereUniqueInput): Promise<Child | string> {
    try {
      const out= await this.prisma.child.findUnique({
        where: whereUniqueInput,
      });
      return out
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        const errorMessage = PRISMA_ERRORS[error.code] ? `Prisma error-${error.code}: ${PRISMA_ERRORS[error.code]}` : `Unexpected error: ${error.message}`;
        return errorMessage;
      }
      return `Unexpected error: ${error.message}`;
    }
  }

  async update(where: Prisma.ChildWhereUniqueInput, data: Prisma.ChildUpdateInput): Promise<Child | string> {
    try {
      const out = await this.prisma.child.update({
        where,
        data,
      });
      return out;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        const errorMessage = PRISMA_ERRORS[error.code] ? `Prisma error-${error.code}: ${PRISMA_ERRORS[error.code]}` : `Unexpected error: ${error.message}`;
        return errorMessage;
      }
      return `Unexpected error: ${error.message}`;
    }
  }

  async delete(where: Prisma.ChildWhereUniqueInput): Promise<Child | string> {
    try {
      const output = await this.prisma.child.delete({
        where,
      });
      return output;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        const errorMessage = PRISMA_ERRORS[error.code] ? `Prisma error-${error.code}: ${PRISMA_ERRORS[error.code]}` : `Unexpected error: ${error.message}`;
        return errorMessage;
      }
      return `Unexpected error: ${error.message}`;
    }
  }
}

