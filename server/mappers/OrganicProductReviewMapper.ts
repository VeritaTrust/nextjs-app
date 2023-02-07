import {OrganicProductReviewDto} from "@server/dto/OrganicProductReviewDto";
import OrganicProductReview from "@server/database/models/OrganicProductReview";

export default class OrganicProductReviewMapper {
  public static toDto(domainObj: OrganicProductReview): OrganicProductReviewDto {
    return {
      rating: domainObj.rating,
      content: domainObj.content,
      status: domainObj.status,
      jobId: domainObj.jobId,
      createdAt: domainObj.createdAt,
      updatedAt: domainObj.updatedAt,
      experienceDate: domainObj.experienceDate,
      title: domainObj.title,
      productId: domainObj.productId,
      productName: domainObj.productName,
      imageVideo: domainObj.imageVideo,
      id: domainObj.id,
      userId: domainObj.userId,
      hashTransaction: domainObj.hashTransaction,
      proofOfPurchase: 'NO PROOF'
    }
  }
}
