-- CreateTable
CREATE TABLE "ErrorLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "moduleId" TEXT,
    "lessonId" TEXT,
    "word" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "context" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'student',
    "theme" TEXT NOT NULL DEFAULT 'light',
    "autoDisclose" BOOLEAN NOT NULL DEFAULT true,
    "nepskinEnabled" BOOLEAN NOT NULL DEFAULT true,
    "cohortId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "User_cohortId_fkey" FOREIGN KEY ("cohortId") REFERENCES "Cohort" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("autoDisclose", "cohortId", "createdAt", "email", "id", "name", "passwordHash", "role", "theme") SELECT "autoDisclose", "cohortId", "createdAt", "email", "id", "name", "passwordHash", "role", "theme" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "ErrorLog_moduleId_createdAt_idx" ON "ErrorLog"("moduleId", "createdAt");

-- CreateIndex
CREATE INDEX "ErrorLog_word_idx" ON "ErrorLog"("word");

-- CreateIndex
CREATE INDEX "ErrorLog_userId_createdAt_idx" ON "ErrorLog"("userId", "createdAt");
