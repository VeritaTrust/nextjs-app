-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_invitations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "sendAt" DATETIME,
    "recipientMail" TEXT NOT NULL,
    "invitationUrl" TEXT NOT NULL,
    "merchantId" INTEGER NOT NULL,
    CONSTRAINT "invitations_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_invitations" ("createdAt", "id", "invitationUrl", "merchantId", "recipientMail", "sendAt", "type", "updatedAt") SELECT "createdAt", "id", "invitationUrl", "merchantId", "recipientMail", "sendAt", "type", "updatedAt" FROM "invitations";
DROP TABLE "invitations";
ALTER TABLE "new_invitations" RENAME TO "invitations";
CREATE UNIQUE INDEX "invitations_invitationUrl_key" ON "invitations"("invitationUrl");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

INSERT INTO invitations(id, type, recipientMail, invitationUrl, merchantId)
    VALUES (1, 'MERCHANT', 'burakkaraoglan55@gmail.com', 'invkaraoglan-12345-istanbul', 1);
