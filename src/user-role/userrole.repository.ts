import { EntityRepository, Repository } from 'typeorm';
//import { subjects } from '../entity/subject.entity';
import { UserRoleA } from './entity/userRole.entity';
@EntityRepository(UserRoleA)
export class userRoleRespoitory extends Repository<UserRoleA> {}