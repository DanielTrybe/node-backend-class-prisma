/*
  Warnings:

  - You are about to drop the column `description` on the `youtube_channels` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `youtube_channels` table. All the data in the column will be lost.
  - You are about to drop the column `subscribers` on the `youtube_channels` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `youtube_channels` DROP COLUMN `description`,
    DROP COLUMN `link`,
    DROP COLUMN `subscribers`,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NULL,
    MODIFY `id` INTEGER NOT NULL;
