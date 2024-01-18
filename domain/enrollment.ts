import { ChallengeId } from "./challenge";
import { UserId } from "./user";

interface Enrollment {
  user: UserId;
  challenge: ChallengeId;
}

export default Enrollment;
