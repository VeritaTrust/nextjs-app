/*
  Warnings:

  - Added the required column `experienceDate` to the `ProductReview` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductReview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rating" INTEGER NOT NULL,
    "experienceDate" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "merchantId" INTEGER,
    "imageUrls" TEXT NOT NULL
);
INSERT INTO "new_ProductReview" ("content", "id", "imageUrls", "merchantId", "rating", "title") SELECT "content", "id", "imageUrls", "merchantId", "rating", "title" FROM "ProductReview";
DROP TABLE "ProductReview";
ALTER TABLE "new_ProductReview" RENAME TO "ProductReview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;


INSERT INTO Product(id, ean, name, category, imageUrl) VALUES(
    1, 'EAN-1231', 'TV-SAMSUNG', 'ELECTRONIC', 'https://m.media-amazon.com/images/I/61Q9Zr0wt5L._AC_UX425_.jpg'
);
