import { ChallengeId } from "./challenge";
import { UserId } from "./user";

export type EnrollmentId = string;

export type Enrollment = {
  id: EnrollmentId;
  userId: UserId;
  challengeId: ChallengeId;
};

export const createEnrollment = (
  id: EnrollmentId,
  userId: UserId,
  challengeId: ChallengeId
): Enrollment => ({
  id,
  userId,
  challengeId,
});
