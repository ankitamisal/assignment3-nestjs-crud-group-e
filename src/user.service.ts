import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPostEntity } from './user/models/post.entity';
import{ Repository } from 'typeorm';
import { UserPost } from './user/models/post.interface';
import { from, observable, Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserPostEntity)
        private readonly userPostRepository: Repository<UserPostEntity>
    ){}
    createuser(userPost:UserPost):Observable<UserPost>{
        return from(this.userPostRepository.save(userPost));
    }

    findAllUser():Observable <UserPost[]> {
        return from(this.userPostRepository.find());
    }
}
