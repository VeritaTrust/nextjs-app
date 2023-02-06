import OrganicMerchantReview from "@server/database/models/OrganicMerchantReview";
import {OrganicMerchantReviewDto} from "@server/dto";

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
      first_name: 'burak',
      last_name: 'karaoglan',
      location: 'location',
      Nbre: 'Nbre???',
      newAddedField: 'BURAK',
      email: 'CHECKMAIL'
    }
  }
}
