-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PromptLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "moduleId" TEXT,
    "lessonId" TEXT,
    "prompt" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "model" TEXT NOT NULL DEFAULT 'gemma4:e2b',
    "rating" INTEGER,
    "flagged" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PromptLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PromptLog" ("createdAt", "flagged", "id", "lessonId", "model", "moduleId", "prompt", "rating", "response", "userId") SELECT "createdAt", "flagged", "id", "lessonId", "model", "moduleId", "prompt", "rating", "response", "userId" FROM "PromptLog";
DROP TABLE "PromptLog";
ALTER TABLE "new_PromptLog" RENAME TO "PromptLog";
CREATE INDEX "PromptLog_userId_createdAt_idx" ON "PromptLog"("userId", "createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
