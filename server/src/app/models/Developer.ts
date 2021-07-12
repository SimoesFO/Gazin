import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import IDeveloperView from '../interfaces/IDeveloperView';
import DeveloperView from '../view/DeveloperView';

@Entity('developers')
class Developer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty({
    message: 'O campo Nome é obrigatório.',
  })
  @IsOptional()
  name: string;

  @Column()
  @Length(1, 1, {
    message: 'O Gênero é um char(1)',
  })
  @IsOptional()
  gender: string;

  @Column()
  @Min(10, { message: 'A idade não pode ser menor do que 10' })
  @Max(100, { message: 'A idade não pode ser maior do que 100' })
  @IsInt({ message: 'A idade precisa ser um número' })
  @IsOptional()
  age: number;

  @Column()
  @IsNotEmpty({
    message: 'O campo Hobby é obrigatório.',
  })
  @IsOptional()
  hobby: string;

  @Column()
  @Matches(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
    message: 'Data de Nascimento inválida.',
  })
  @IsNotEmpty({
    message: 'O campo Data de Nascimento é obrigatório.',
  })
  @IsOptional()
  birthday: Date;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @BeforeInsert()
  private setCreatedAt(): void {
    this.createdAt = new Date();
  }

  public getView(): IDeveloperView {
    return DeveloperView.render(this);
  }
}

export default Developer;
