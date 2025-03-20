-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "Rgistration_number" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Class" TEXT NOT NULL,
    "Roll_No" INTEGER NOT NULL,
    "contact_number" TEXT NOT NULL,
    "Status" BOOLEAN NOT NULL DEFAULT true
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_Rgistration_number_key" ON "Students"("Rgistration_number");

-- CreateIndex
CREATE UNIQUE INDEX "Students_Class_Roll_No_key" ON "Students"("Class", "Roll_No");
