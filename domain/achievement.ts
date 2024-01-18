import { ISO8601String } from "@/utils/date";

type AchievementId = string;

interface Achievement {
  id: AchievementId;
  createdAt: ISO8601String;
  background: Background;
}

export default Achievement;
