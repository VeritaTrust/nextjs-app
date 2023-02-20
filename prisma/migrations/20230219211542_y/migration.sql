/*
  Warnings:

  - Added the required column `invitationId` to the `merchant-reviews` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "blockchain-transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hash" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "invitationId" INTEGER NOT NULL,
    CONSTRAINT "blockchain-transactions_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "invitations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_merchant-reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "merchantId" INTEGER NOT NULL,
    "invitationId" INTEGER NOT NULL,
    CONSTRAINT "merchant-reviews_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "invitations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "merchant-reviews_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_merchant-reviews" ("content", "createdAt", "id", "merchantId", "title", "updatedAt") SELECT "content", "createdAt", "id", "merchantId", "title", "updatedAt" FROM "merchant-reviews";
DROP TABLE "merchant-reviews";
ALTER TABLE "new_merchant-reviews" RENAME TO "merchant-reviews";
CREATE UNIQUE INDEX "merchant-reviews_invitationId_key" ON "merchant-reviews"("invitationId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "blockchain-transactions_hash_key" ON "blockchain-transactions"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "blockchain-transactions_invitationId_key" ON "blockchain-transactions"("invitationId");
