/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put,  Param, Delete, Query, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { AdService } from './ad.service';
import { Ad, Prisma, UserHasAds } from '@prisma/client';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { UserService } from '../../src/user/user.service';
import { AuthGuard } from '../guards/jwt.guards';
import { GetAdsFilterDto } from './dto/get-ads-filter.dto';
import { GetAdsCategoryDto } from './dto/get-ads-category.dto';
import { GetAdsUserDto } from './dto/get-ads-user.dto';

//? ROUTE FILTRE BARRE DE RECHERCHE PAR TITRE | VILLE
//? ROUTE FILTRE CATÉGORIE & SOUS-CATÉGORIE
//? ROUTE PAGINATION??
//? ROUTE AFFICHER ANNONCE PAR UTILISATEUR [OU DANS USER.CONTROLLER??]
//? USER CREATE SUBSCRIPTION/S
//TODO: USER READ ALL SUBSCRIPTIONS
//TODO: USER READ SUBSCRIPTIONS BY PARAMS --> UPDATE | DELETE [FINDBYPARAMS]
//TODO: USER READ SUBSCRIPTIONS BY ID --> UPDATE | DELETE [FINDBYUNIQUE]
//TODO: USER UPDATE SUBSCRIPTIONS
//TODO: USER DELETE SUBSCRIPTIONS


@Controller('ad')
export class AdController {
  constructor(
    private readonly adService: AdService,
    private readonly userService: UserService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() data: CreateAdDto): Promise<{ ad: Ad, message: string}> {

    // vérifier si l'utilisateur existe
    const user = await this.userService.findByUnique({id : data.userId})
      if (!user) throw new HttpException(`L'utilisateur n'existe pas`, HttpStatus.CONFLICT)

    const new_ad =  await this.adService.create({
      title: data.title,
      description: data.description,
      startTime: data.startTime,
      endTime: data.endTime,
      duration: data.duration,
      address: data.address,
      postalCode: data.postalCode,
      city: data.city,
      country: data.country,
      attendees: data.attendees,
      transport: data.transport,
      conform: data.conform,
      status: data.status,
      adPicture: data.adPicture,
      users: { connect: { id: data.userId } },
      category: { connect: { id: data.categoryId } },
      subCategory: { connect: { id: data.subCategoryId } },
    });

    const message = `L'annonce a bien été créée`

    return {
      ad: new_ad,
      message
    }
  }

  @Post(':id/subscribe')
  async subscribeUserToAd(
    @Param('id') adId: string,
    @Body() { userId }: { userId: string },
  ): Promise<{ subscription: UserHasAds, message: string }> {
    const user = await this.userService.findByUnique({ id: userId });
    if (!user) throw new HttpException(`L'utilisateur n'existe pas`, HttpStatus.CONFLICT);

    const ad = await this.adService.findByUnique({ id: adId });
    if (!ad) throw new HttpException(`L'annonce n'existe pas`, HttpStatus.CONFLICT);

    const subscription = await this.adService.subscribeUserToAd(userId, adId);
    const message = `L'utilisateur a été inscrit à l'annonce avec succès`;

    return {
      subscription,
      message,
    };
  }

  @Get()
  async findAllByParams(@Query() options: {skip?: string, take?: string }): Promise<{ads: Ad[], message: string}> {
    const new_options: Prisma.AdFindManyArgs = {
      skip: options.skip ? +options.skip: 0,
      take: options.take ? +options.take: 6,
    }
    /* options.skip? new_options.skip = +options.skip : null
    options.take? new_options.take = +options.take : null */

    const ads = await this.adService.findAllByParams(new_options)
    const message = `Liste d'annonces filtrées`

    return {
      ads,
      message
    };
  }

  @Get('params')
  async findAllByFilters(
    @Query() {search}: GetAdsFilterDto,
  ): Promise<{ads: Ad[], message: string}> {

    const ads = await this.adService.findAllByFilters(search)
    const message = `Liste d'annonces filtrées`
    return {
      ads,
      message
    };
  }

  @Get('categories')
  async findAllByCategories(
    @Query() categoryParams: GetAdsCategoryDto,
  ): Promise<{ads: Ad[], message: string}> {

    const ads = await this.adService.findAllByCategories(categoryParams)
    const message = `Liste d'annonces filtrées`

    return {
      ads,
      message
    };
  }

  @Get('user')
  async findAllByUser(
    @Query() {id}: GetAdsUserDto,
  ): Promise<{userAds: Ad[], message: string}> {

    const userAds = await this.adService.findAllByUser(id)
    const message = `Liste d'annonces de l'utilisateur`

    return {
      userAds,
      message
    };
  }

  @Get(':id')
  async readRoute(
      @Param('id') id: string,
  ): Promise<{ ad: Ad, message: string}> {
  
    const ad = await this.adService.findByUnique({ id });

    if (!ad) throw new HttpException('L\'annonce n\'a pas été trouvée', HttpStatus.CONFLICT)

    return {
      ad,
      message: `Annonce avec l'id ${id}`
    };
  }

  @Put(':id')
  async updateRoute(
      @Param('id') id: string,
      @Body() adUpdateDto: UpdateAdDto,
  ): Promise<{ad: Ad, message: string}> {
      const ad = await this.adService.findByUnique({ id });
      
      if (!ad) throw new HttpException('L\'annonce n\'a pas été trouvée', HttpStatus.CONFLICT)

      const adUpdate = await this.adService.update({ id }, adUpdateDto);

      const message = `L'annonce avec l'id ${id} a bien été mise à jour`;

      return {
        ad: adUpdate,
        message
      }
  }

  @Delete(':id')
  async deleteRoute(@Param('id') id: string,): Promise<Ad | { message: string }> {

    const ad = await this.adService.findByUnique({ id })

    if(!ad) throw new HttpException('L\'annonce n\'a pas été trouvée', HttpStatus.CONFLICT)

    this.adService.delete({ id });

    return { message: `L'annonce avec l'id ${id} a bien été supprimée` }
  }
}