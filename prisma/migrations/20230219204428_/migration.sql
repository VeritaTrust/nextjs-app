/*
  Warnings:

  - You are about to drop the column `invitationId` on the `invitations` table. All the data in the column will be lost.
  - Added the required column `invitationUrl` to the `invitations` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_invitations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sendAt" DATETIME NOT NULL,
    "recipientMail" TEXT NOT NULL,
    "invitationUrl" TEXT NOT NULL,
    "merchantId" INTEGER NOT NULL,
    CONSTRAINT "invitations_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_invitations" ("createdAt", "id", "merchantId", "recipientMail", "sendAt", "type", "updatedAt") SELECT "createdAt", "id", "merchantId", "recipientMail", "sendAt", "type", "updatedAt" FROM "invitations";
DROP TABLE "invitations";
ALTER TABLE "new_invitations" RENAME TO "invitations";
CREATE UNIQUE INDEX "invitations_invitationUrl_key" ON "invitations"("invitationUrl");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

