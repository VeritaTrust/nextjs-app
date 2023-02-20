// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {PrismaClient} from "@prisma/client";
import MerchantReviewMapper from "@server/mappers/MerchantReviewMapper";
import {MerchantReviewDto} from "@server/dto/MerchantReviewDto";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MerchantReviewDto[] | Data>
) {
  try {
    const reviews = await new PrismaClient().merchantReview.findMany({
      where: {
        domain: req.query.website as string
      }
    })
    const mapped = reviews.map(rev => MerchantReviewMapper.toDto(rev))
    return res.status(200).json(mapped);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: 'Unable to connect to the database:' });
  }
}
