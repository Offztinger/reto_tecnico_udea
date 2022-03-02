import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TareaEntity } from './tarea.entity';

@Injectable()
export class TareaService {
  constructor(
    @InjectRepository(TareaEntity)
    private readonly tareaRP: Repository<TareaEntity>,
  ) {}
  findAll(): Promise<TareaEntity[]> {
    return this.tareaRP.find();
  }

  findOne(id: number): Promise<TareaEntity> {
    return this.tareaRP.findOne(id);
  }

  async create(tarea: TareaEntity): Promise<void> {
    await this.tareaRP.insert(tarea);
  }

  async update(tarea: TareaEntity): Promise<void> {
    await this.tareaRP.update(tarea.id, tarea);
  }

  async delete(id: number): Promise<void> {
    await this.tareaRP.delete(id);
  }
}
