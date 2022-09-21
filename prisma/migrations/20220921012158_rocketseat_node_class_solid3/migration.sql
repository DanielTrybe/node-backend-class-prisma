/*
  Warnings:

  - The primary key for the `users_rocketseat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `users_rocketseat` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users_rocketseat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users_rocketseat` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    MODIFY `id` VARCHAR(191) NOT NULL;
