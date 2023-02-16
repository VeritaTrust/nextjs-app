// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { OrganicProductReviewDto } from '@server/dto/OrganicProductReviewDto';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrganicProductReviewDto[] | Data>
) {
  try {
    /*const productName = req.query.productName;

    const repo = sequelize.getRepository(OrganicProductReview)
    const a = await repo.findAll({
      where: {
        productName
      }
    });

    console.log('AAA', a)

    const mapped = a.map(rev => OrganicProductReviewMapper.toDto(rev))

    console.log('MAOPPER', mapped)*/
    //return res.status(200).json(mapped)
    return res.status(200).json([]);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: 'Unable to connect to the database:' });
  }
  // res.status(200).json({ message: 'SUCCESS from seq productg review.' });
}
