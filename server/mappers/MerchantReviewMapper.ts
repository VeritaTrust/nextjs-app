import { MerchantReview } from '@prisma/client';
import { MerchantReviewDto } from '@server/dto/MerchantReviewDto';

export default class MerchantReviewMapper {
  public static toDto(domainObj: MerchantReview): MerchantReviewDto {
    return {
      id: domainObj.id,
      title: domainObj.title,
      content: domainObj.content,
      merchantId: domainObj.merchantId,
    };
  }
}
