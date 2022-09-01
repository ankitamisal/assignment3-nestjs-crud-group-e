import { EntityRepository, Repository } from 'typeorm';
import { subjects } from '../entity/subject.entity';
@EntityRepository(subjects)
export class subjectRespoitory extends Repository<subjects> {}
