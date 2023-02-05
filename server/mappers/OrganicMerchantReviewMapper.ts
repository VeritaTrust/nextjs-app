import OrganicMerchantReview from "@server/database/models/OrganicMerchantReview";
import { OrganicMerchantReviewDto } from "@server/dto";

export default class OrganicMerchantReviewMapper {
  public static toDto(domainObj: OrganicMerchantReview): OrganicMerchantReviewDto {
    return {
      rating: domainObj.rating,
      content: domainObj.content,
      status: domainObj.status,
      jobId: domainObj.jobId,
      createdAt: domainObj.createdAt,
      updatedAt: domainObj.updatedAt,
      experienceDate: domainObj.experienceDate,
      newAddedField: 'BURAK',
      email: 'CHECKMAIL'
    }
  }
}
