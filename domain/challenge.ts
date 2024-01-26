import { Achievement } from "./achievement";

export type ChallengeId = string;

export type Challenge = {
  id: ChallengeId;
  createdAt: ISOString;
  name: string;
  goalCount: number;
  achievements: Achievement[];
};

export const createChallenge = (
  id: ChallengeId,
  createdAt: ISOString,
  name: string,
  goalCount: number
): Challenge => ({
  id,
  createdAt,
  name,
  goalCount,
  achievements: [],
});

export const updateChallengeName = (challenge: Challenge, name: string) => ({
  ...challenge,
  name,
});

export const addAchievement = (
  challenge: Challenge,
  achievement: Achievement
): Challenge => ({
  ...challenge,
  achievements: [...challenge.achievements, achievement],
});

export const isAchievementCountUnderGoalCount = (
  challenge: Challenge
): boolean => {
  return challenge.achievements.length < challenge.goalCount;
};
