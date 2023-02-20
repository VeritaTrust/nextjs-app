/*
  Warnings:

  - Added the required column `experienceDate` to the `merchant-reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `merchant-reviews` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_merchant-reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "experienceDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "approvedAt" DATETIME,
    "approvedBy" TEXT,
    "merchantId" INTEGER NOT NULL,
    "invitationId" INTEGER NOT NULL,
    CONSTRAINT "merchant-reviews_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "merchant-review-invitations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "merchant-reviews_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_merchant-reviews" ("approvedAt", "approvedBy", "content", "createdAt", "id", "invitationId", "merchantId", "title", "updatedAt") SELECT "approvedAt", "approvedBy", "content", "createdAt", "id", "invitationId", "merchantId", "title", "updatedAt" FROM "merchant-reviews";
DROP TABLE "merchant-reviews";
ALTER TABLE "new_merchant-reviews" RENAME TO "merchant-reviews";
CREATE UNIQUE INDEX "merchant-reviews_invitationId_key" ON "merchant-reviews"("invitationId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
