/*
  Warnings:

  - You are about to drop the `youtube_channels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `youtube_channels`;

-- CreateTable
CREATE TABLE `users_rocketseat` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_rocketseat_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
