import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table({
  tableName: "organic_merchant_review"
})
export default class OrganicMerchantReview extends Model {
  @Column
  rating!: number;

  @Column
  content!: string;

  @Column
  status!: string;

  @Column
  jobId!: string;

  @Column
  user_id!: string;

  @Column
  merchant_id!: string;

  @CreatedAt
  @Column({
    field: 'created_at'
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    field: 'updated_at'
  })
  updatedAt!: Date;

  @UpdatedAt
  @Column({
    field: 'experience_date'
  })
  experienceDate!: Date;
}
