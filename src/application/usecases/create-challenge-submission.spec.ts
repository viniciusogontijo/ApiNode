
import { InMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('create chanllegend submission use case', ()=>{
  it('should be able to create a new challenge submission',async()=>{

    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

    const student = Student.create({
      name: 'testeUsuario',
      email:'teste@teste.com'
    })
    const challenged = Challenge.create({
      title: 'challenged teste',
      instructionsUrl: 'http://teste.com'
    });

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenged);

    const sut = new CreateChallengeSubmission(studentsRepository,challengesRepository);
    
    const response = await sut.execute({
      studentId:student.id,
      challengeId:challenged.id,
    })

    expect(response).toBeTruthy()
  });
});