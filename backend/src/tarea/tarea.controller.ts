import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { response } from 'express';
import { TareaService } from './tarea.service';

@Controller('tarea')
export class TareaController {
  constructor(private readonly tareaService: TareaService) {}
  @Get()
  async obtenerTareas() {
    const tareas = await this.tareaService.findAll();
    return tareas;
  }

  @Get(':id')
  async obtenerTarea(@Param() id) {
    const tarea = await this.tareaService.findOne(id);
    return tarea;
  }

  @Post()
  @HttpCode(200)
  crearTarea(@Body() tarea) {
    this.tareaService.create(tarea);
  }
  

  @Put()
  @HttpCode(200)
  actualizarTarea(@Body() elemento) {
    this.tareaService.update(elemento)
  }

  @Delete(':id')
  @HttpCode(200)
  eliminarTarea(@Param() id) {
      this.tareaService.delete(id)
  }
}
