/*
  Warnings:

  - You are about to drop the column `lives` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "lives",
ADD COLUMN     "lastRaidAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Raid" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "success" BOOLEAN NOT NULL,
    "experienceGained" INTEGER NOT NULL,
    "goldGained" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Raid_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Raid" ADD CONSTRAINT "Raid_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
