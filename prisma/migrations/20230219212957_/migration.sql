/*
  Warnings:

  - You are about to drop the `invitations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `invitationId` on the `blockchain-transactions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "invitations_invitationUrl_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "invitations";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "merchant-review-invitations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "sendAt" DATETIME,
    "recipientMail" TEXT NOT NULL,
    "invitationUrl" TEXT NOT NULL,
    "merchantId" INTEGER NOT NULL,
    CONSTRAINT "merchant-review-invitations_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "product-review-invitations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "sendAt" DATETIME,
    "recipientMail" TEXT NOT NULL,
    "invitationUrl" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "productReviewId" INTEGER,
    CONSTRAINT "product-review-invitations_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product-review-invitations_productReviewId_fkey" FOREIGN KEY ("productReviewId") REFERENCES "product-reviews" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_merchant-reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "approvedAt" DATETIME,
    "approvedBy" TEXT,
    "merchantId" INTEGER NOT NULL,
    "invitationId" INTEGER NOT NULL,
    CONSTRAINT "merchant-reviews_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "merchant-review-invitations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "merchant-reviews_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_merchant-reviews" ("content", "createdAt", "id", "invitationId", "merchantId", "title", "updatedAt") SELECT "content", "createdAt", "id", "invitationId", "merchantId", "title", "updatedAt" FROM "merchant-reviews";
DROP TABLE "merchant-reviews";
ALTER TABLE "new_merchant-reviews" RENAME TO "merchant-reviews";
CREATE UNIQUE INDEX "merchant-reviews_invitationId_key" ON "merchant-reviews"("invitationId");
CREATE TABLE "new_blockchain-transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hash" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "merchantReviewId" INTEGER,
    "productReviewId" INTEGER,
    CONSTRAINT "blockchain-transactions_merchantReviewId_fkey" FOREIGN KEY ("merchantReviewId") REFERENCES "merchant-review-invitations" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "blockchain-transactions_productReviewId_fkey" FOREIGN KEY ("productReviewId") REFERENCES "product-review-invitations" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_blockchain-transactions" ("hash", "id", "status") SELECT "hash", "id", "status" FROM "blockchain-transactions";
DROP TABLE "blockchain-transactions";
ALTER TABLE "new_blockchain-transactions" RENAME TO "blockchain-transactions";
CREATE UNIQUE INDEX "blockchain-transactions_hash_key" ON "blockchain-transactions"("hash");
CREATE UNIQUE INDEX "blockchain-transactions_merchantReviewId_key" ON "blockchain-transactions"("merchantReviewId");
CREATE UNIQUE INDEX "blockchain-transactions_productReviewId_key" ON "blockchain-transactions"("productReviewId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "merchant-review-invitations_invitationUrl_key" ON "merchant-review-invitations"("invitationUrl");

-- CreateIndex
CREATE UNIQUE INDEX "product-review-invitations_invitationUrl_key" ON "product-review-invitations"("invitationUrl");

INSERT INTO "merchant-review-invitations"(id, type, recipientMail, invitationUrl, merchantId)
    VALUES (1, 'MERCHANT', 'burakkaraoglan55@gmail.com', 'invkaraoglan-12345-istanbul', 1);
