import { type UserId } from '@/core/user'
import { type ChallengeId } from '@/core/challenge'

export type EnrollmentId = string

export type Enrollment = {
  id: EnrollmentId
  userId: UserId
  challengeId: ChallengeId
}

export const createEnrollment = (
  id: EnrollmentId,
  userId: UserId,
  challengeId: ChallengeId
): Enrollment => ({
  id,
  userId,
  challengeId,
})
