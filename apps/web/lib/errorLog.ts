import { prisma } from "@/lib/db";

export async function logError(entry: {
  userId?: string;
  moduleId?: string;
  lessonId?: string;
  word: string;
  message: string;
  source: "nepskin" | "self_report";
  context?: string;
}) {
  return prisma.errorLog.create({
    data: {
      userId: entry.userId,
      moduleId: entry.moduleId,
      lessonId: entry.lessonId,
      word: entry.word.toLowerCase().trim().slice(0, 200),
      message: entry.message.slice(0, 1000),
      source: entry.source,
      context: entry.context?.slice(0, 500),
    },
  });
}
