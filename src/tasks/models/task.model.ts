import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';

@Table({ modelName: "tasks" })
export class Task extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column
    title: string;

    @Column
    content: string;

    @Column
    status: boolean;
}