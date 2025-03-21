/*
  Warnings:

  - You are about to drop the column `Rgistration_number` on the `Students` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Registration_number]` on the table `Students` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Registration_number` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Students_Rgistration_number_key";

-- AlterTable
ALTER TABLE "Students" DROP COLUMN "Rgistration_number",
ADD COLUMN     "Registration_number" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Students_Registration_number_key" ON "Students"("Registration_number");
