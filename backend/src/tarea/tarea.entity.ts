import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tarea')
export class TareaEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  fechaCreacion: Date;
  @Column()
  categorias: string;
  @Column()
  check: boolean;
}
