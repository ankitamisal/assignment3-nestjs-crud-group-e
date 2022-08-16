import { Test, TestingModule } from '@nestjs/testing';
import { StudentManagmentService } from './student-managment.service';

describe('StudentManagmentService', () => {
  let service: StudentManagmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentManagmentService],
    }).compile();

    service = module.get<StudentManagmentService>(StudentManagmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
