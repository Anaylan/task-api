import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TasksService {

    constructor(
        @InjectModel(Task)
        private taskRepository: typeof Task
    ) { }


    public async findAll() {
        const tasks = await this.taskRepository.findAll();
        if (!tasks) {
            throw new HttpException('No task found', HttpStatus.NOT_FOUND);
        }
        return tasks;
    }

    public async findOneBy(id: number) {
        const task = await this.taskRepository.findByPk<Task>(id);
        if (!task) {
            throw new HttpException('No task found', HttpStatus.NOT_FOUND);
        }
        return task;
    }

    public async create(createTaskDto: CreateTaskDto) {
        const task = new Task();
        task.title = createTaskDto.title;
        task.content = createTaskDto.content;
        task.status = createTaskDto.status;

        return task.save();
    }

    public async delete(id: number) {
        const task = await this.findOneBy(id);
        await task.destroy();
        return task;
    }
}
