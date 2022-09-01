import { Test, TestingModule } from '@nestjs/testing';
import { StujectsService } from './stujects.service';

describe('StujectsService', () => {
  let service: StujectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StujectsService],
    }).compile();

    service = module.get<StujectsService>(StujectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
