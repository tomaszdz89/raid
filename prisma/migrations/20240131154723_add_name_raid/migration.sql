/*
  Warnings:

  - Added the required column `name` to the `Raid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Raid" ADD COLUMN     "name" TEXT NOT NULL;
