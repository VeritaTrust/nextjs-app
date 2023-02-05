import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table({
  tableName: "Users"
})
export default class User extends Model {
  @Column({
    field: 'first_name',
  })
  firstName!: string;

  @Column({
    field: 'last_name',
  })
  lastName!: string;

  @Column
  email!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
