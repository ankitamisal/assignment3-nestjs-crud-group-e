import { Test, TestingModule } from '@nestjs/testing';
import { StudentManagmentController } from './student-managment.controller';

describe('StudentManagmentController', () => {
  let controller: StudentManagmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentManagmentController],
    }).compile();

    controller = module.get<StudentManagmentController>(StudentManagmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
