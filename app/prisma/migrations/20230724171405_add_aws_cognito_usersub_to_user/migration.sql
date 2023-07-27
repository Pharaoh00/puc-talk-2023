/*
  Warnings:

  - Added the required column `aws_cognito_usersub` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `aws_cognito_usersub` VARCHAR(191) NOT NULL;
