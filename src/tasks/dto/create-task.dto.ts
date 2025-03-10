import { IsString, IsBoolean } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly content: string;

    @IsBoolean()
    readonly status: boolean;
}