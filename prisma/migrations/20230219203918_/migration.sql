/*
  Warnings:

  - Added the required column `updatedAt` to the `merchant-reviews` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "invitations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sendAt" DATETIME NOT NULL,
    "recipientMail" TEXT NOT NULL,
    "merchantId" INTEGER NOT NULL,
    CONSTRAINT "invitations_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
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
    CONSTRAINT "merchant-reviews_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_merchant-reviews" ("content", "id", "merchantId", "title") SELECT "content", "id", "merchantId", "title" FROM "merchant-reviews";
DROP TABLE "merchant-reviews";
ALTER TABLE "new_merchant-reviews" RENAME TO "merchant-reviews";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
