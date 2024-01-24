type AchievementId = string;

export type Achievement = {
  id: AchievementId;
  createdAt: ISOString;
  background: Background;
};

export const createAchievement = (
  id: AchievementId,
  createdAt: ISOString,
  background: Background
): Achievement => ({
  id,
  createdAt,
  background,
});
