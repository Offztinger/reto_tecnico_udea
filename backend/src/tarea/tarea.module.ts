import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaEntity } from './tarea.entity';
import { TareaController } from './tarea.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TareaEntity])],
  providers: [TareaService],
  controllers: [TareaController],
  exports: [TypeOrmModule],
})
export class TareaModule {}
