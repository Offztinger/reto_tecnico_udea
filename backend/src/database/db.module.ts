require('dotenv').config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaEntity } from 'src/tarea/tarea.entity';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: 'admin',
      password: process.env.PASSWORD,
      database: 'bd_taskinator',
      entities: [TareaEntity],
      synchronize: true,
    }),
  ],
})
export class DbModule {
  constructor(private readonly connection: Connection) {}
}
