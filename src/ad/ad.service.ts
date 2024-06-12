/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Ad, Prisma } from '@prisma/client';
// import { CreateAdDto } from './dto/create-ad.dto';
// import { UpdateAdDto } from './dto/update-ad.dto';
import { PrismaService } from '../../prisma/prisma.service';

//TODO:
@Injectable()
export class AdService {

  constructor(private prisma: PrismaService) {}

  /* async create(data: CreateAdDto): Promise<Ad> {
    return this.prisma.ad.create({
        data,
    })
  }
 */

  async findAllByParams(options: Prisma.AdFindManyArgs): Promise<Ad[]>{
    return this.prisma.ad.findMany(options);
  }

  async findByUnique(
    adWhereUniqueInput: Prisma.AdWhereUniqueInput
  ): Promise<Ad | null> {
    return this.prisma.ad.findUnique({
      where: adWhereUniqueInput
    });
  }

  /* async update(id: number, updateAdDto: UpdateAdDto) {
    return `This action updates a #${id} ad`;
  } */

  async remove(id: number) {
    return `This action removes a #${id} ad`;
  }
}