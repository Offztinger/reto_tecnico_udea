import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaModule } from './tarea.module';
import { TareaService } from './tarea.service';

@Module({
  imports: [TareaModule],
  providers: [TareaService],
  controllers: [TareaController],
})

export class TareaHttpModule {}
