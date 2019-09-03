import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { CustomerEntity } from '@app/customer/entity/customer.entity';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

  @Column({
    default: true
  })
  isActive: boolean;

  @OneToMany(type  => CustomerEntity, customer => customer.role)
  customer: CustomerEntity[];
}