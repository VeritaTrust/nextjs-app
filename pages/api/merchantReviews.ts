// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import OrganicMerchantReview from '@server/database/models/OrganicMerchantReview'
import sequelize from "@server/database/models/conn";
import OrganicMerchantReviewMapper from "@server/mappers/OrganicMerchantReviewMapper";
import {OrganicMerchantReviewDto} from "@server/dto";

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrganicMerchantReviewDto[] | Data>
) {
  try {

    const repo = sequelize.getRepository(OrganicMerchantReview)
    const a = await repo.findAll();

    //return res.status(200).send(a?.dataValues)

//    return res.status(200).json(a?.dataValues)
    const mapped = a.map(rev => OrganicMerchantReviewMapper.toDto(rev))

    return res.status(200).json(mapped)

  } catch (error) {
    console.log(error)
    return res.status(400).json({message: "Unable to connect to the database:"})
  }
  res.status(200).json({message: 'SUCCESS from seq rev. merch'})
}
