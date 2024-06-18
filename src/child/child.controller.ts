/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChildService } from './child.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';


//TODO: CREATE CHILD
//TODO: READ ALL CHILDREN
//TODO: READ CHILD BY PARAMS [FINDBYPARAMS]
//TODO: READ CHILD BY ID [FINDBYID]
//TODO: UPDATE CHILDREN
//TODO: DELETE CHILDREN

@Controller('child')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Post()
  create(@Body() createChildDto: CreateChildDto) {
    return this.childService.create(createChildDto);
  }

  @Get()
  findAll() {
    return this.childService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.childService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChildDto: UpdateChildDto) {
    return this.childService.update(+id, updateChildDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.childService.remove(+id);
  }
}