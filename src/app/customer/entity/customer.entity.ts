import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  customer_name: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone: string;

  @Column({ type: 'text' })
  address1: string;

  @Column({ type: 'text' })
  address2: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  postal_code: string;

  @Column()
  country: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

  @Column({
    default: true
  })
  isActive: boolean
}