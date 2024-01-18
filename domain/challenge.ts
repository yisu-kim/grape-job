import Achievement from "./achievement";
import { ISO8601String } from "@/utils/date";

export type ChallengeId = string;

interface Challenge {
  id: ChallengeId;
  createdAt: ISO8601String;
  name: string;
  goalCount: number;
  achievements: Achievement[];
}

export default Challenge;
