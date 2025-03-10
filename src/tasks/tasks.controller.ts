import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  public async findAll() {
    try {
      return this.tasksService.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':id')
  public async findOneBy(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.tasksService.findOneBy(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Post()
  async create(@Body() createCardDto: CreateTaskDto) {
    try {
      return this.tasksService.create(createCardDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.tasksService.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
