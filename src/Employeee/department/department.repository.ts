import { EntityRepository, Repository } from 'typeorm';
import { Department } from '../entity/department.entity';
@EntityRepository(Department)
export class departmentRepo extends Repository<Department> {}