import { Sequelize } from 'sequelize-typescript';
import User from "@server/database/models/User";
import OrganicMerchantReview from "@server/database/models/OrganicMerchantReview";

const sequelize = new Sequelize({
  repositoryMode: true,
  username: 'root',
  password: 'rootroot',
  database: 'veri_test',
  host: '127.0.0.1',
  port: 3306,
  logging: false,
  dialect: "mysql",
});

sequelize.addModels([User, OrganicMerchantReview]);

export default sequelize;
