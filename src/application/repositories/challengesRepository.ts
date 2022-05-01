import { Challenge } from "../../domain/entities/challenge";

export interface ChallengesRepository{
  findById(challagenId:string): Promise<Challenge | null >;
}