-- CreateTable
CREATE TABLE "Checkpoint" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cohortId" TEXT NOT NULL,
    "moduleId" TEXT,
    "title" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "dueAt" DATETIME NOT NULL,
    "durationMin" INTEGER,
    "location" TEXT,
    "mentor" TEXT,
    "prepPrompt" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Checkpoint_cohortId_fkey" FOREIGN KEY ("cohortId") REFERENCES "Cohort" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CheckpointCompletion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "checkpointId" TEXT NOT NULL,
    "completedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CheckpointCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CheckpointCompletion_checkpointId_fkey" FOREIGN KEY ("checkpointId") REFERENCES "Checkpoint" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cohort" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "startDate" DATETIME,
    "weeks" INTEGER NOT NULL DEFAULT 14,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Cohort" ("code", "createdAt", "id", "name") SELECT "code", "createdAt", "id", "name" FROM "Cohort";
DROP TABLE "Cohort";
ALTER TABLE "new_Cohort" RENAME TO "Cohort";
CREATE UNIQUE INDEX "Cohort_name_key" ON "Cohort"("name");
CREATE UNIQUE INDEX "Cohort_code_key" ON "Cohort"("code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "Checkpoint_cohortId_dueAt_idx" ON "Checkpoint"("cohortId", "dueAt");

-- CreateIndex
CREATE UNIQUE INDEX "CheckpointCompletion_userId_checkpointId_key" ON "CheckpointCompletion"("userId", "checkpointId");
