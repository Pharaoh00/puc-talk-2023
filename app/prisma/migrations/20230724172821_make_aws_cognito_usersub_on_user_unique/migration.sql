/*
  Warnings:

  - A unique constraint covering the columns `[aws_cognito_usersub]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `users_aws_cognito_usersub_key` ON `users`(`aws_cognito_usersub`);
