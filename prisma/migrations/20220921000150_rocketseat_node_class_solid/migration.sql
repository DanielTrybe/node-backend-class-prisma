/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `youtube_channels` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `youtube_channels` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `youtube_channels` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `youtube_channels_name_key` ON `youtube_channels`;

-- AlterTable
ALTER TABLE `youtube_channels` MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `youtube_channels_email_key` ON `youtube_channels`(`email`);
