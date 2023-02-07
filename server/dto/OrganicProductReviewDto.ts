export interface OrganicProductReviewDto {
  id: number;
  productName: string;
  rating: number;
  title: string;
  content: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  experienceDate: Date;
  imageVideo: string;
  proofOfPurchase?: string;
  jobId: string;
  userId: string;
  productId: number;
  hashTransaction?: string;
}
