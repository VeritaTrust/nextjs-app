This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
if no db found in prisma folder
do pls. => npm run prisma:dev to migrate sqlite local file db

```bash
npm run prod
# or
yarn prod
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/index.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


/*import OrganicMerchantReview from '@server/database/models/OrganicMerchantReview';
import { OrganicMerchantReviewDto } from '@server/dto';

export default class OrganicMerchantReviewMapper {
public static toDto(
domainObj: OrganicMerchantReview
): OrganicMerchantReviewDto {
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
title: 'TITLE',
Nbre: 'Nbre???',
newAddedField: 'BURAK',
email: 'CHECKMAIL',
};
}
}
*/


import { OrganicProductReviewDto } from '@server/dto/OrganicProductReviewDto';

export default class OrganicProductReviewMapper {
public static toDto(
domainObj: OrganicProductReview
): OrganicProductReviewDto {
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
proofOfPurchase: 'NO PROOF',
};
}
}


sed -ie 's/sqlite/mysql/g' prisma/schema.prisma && 
