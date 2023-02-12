// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MerchantReviewDto} from "@server/dto/MerchantReviewDto";
import {PrismaClient} from "@prisma/client";
import {AddMerchantReviewDto} from "@server/dto/request/AddMerchantReviewDto";
import MerchantReviewMapper from "@server/mappers/MerchantReviewMapper";

type Data = {
  message: string
}

interface ExtendedNextApiRequest extends NextApiRequest {
  body: AddMerchantReviewDto
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<MerchantReviewDto | Data>
) {
  try {
    const model = await new PrismaClient().merchantReview.create({
      data: {
        content: req.body.content,
        title: req.body.title,
        merchantId: Number(req.query.merchantId)
      }
    })

    return res.status(201).json(MerchantReviewMapper.toDto(model))

  } catch (error) {
    console.log(error)
    return res.status(400).json({message: "Unable to connect to the database:"})
  }
}
