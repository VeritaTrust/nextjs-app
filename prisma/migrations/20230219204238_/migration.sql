/*
  Warnings:

  - A unique constraint covering the columns `[invitationId]` on the table `invitations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "invitations_invitationId_key" ON "invitations"("invitationId");
