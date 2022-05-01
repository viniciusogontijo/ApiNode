import { Entity } from "../../core/domain/Entity";

type submissionProps ={
  challengeId: string;
  studentId: string;
  createdAt?: Date;
}

export class Submission extends Entity<submissionProps>{
  private constructor(props:submissionProps, id?:string){
    super(props, id);
  }

  static create(props:submissionProps, id?:string){
    const submission = new Submission({...props, createdAt:props.createdAt?? new Date()}, id);

    return submission;
  }
}