import { ChallengesRepository } from "../../src/application/repositories/challengesRepository";
import { Challenge } from "../../src/domain/entities/challenge";


export class InMemoryChallengesRepository implements ChallengesRepository{

  public items : Challenge[] = [];

  async findById(challagenId:string): Promise<Challenge | null >{

    const challenge = this.items.find(challenge => challenge.id === challagenId)

    if(!challenge)
      return null;

    return challenge;
  }
}