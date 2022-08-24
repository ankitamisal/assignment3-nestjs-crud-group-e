import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPostEntity } from './post.entity';
import{ Repository, UpdateResult,DeleteResult } from 'typeorm';
import { UserPost } from './post.interface';
import { from, Observable } from 'rxjs';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserPostEntity)
        private readonly userPostRepository: Repository<UserPostEntity>
    ){}
    createuser(userPost:UserPost):Observable<UserPost>{
        return from(this.userPostRepository.save(userPost));
    }

    find(id: number) {
        return from(this.userPostRepository.findOneBy({id}))
    }
    findAll(): Observable <UserPost[]> {
        return from(this.userPostRepository.find());
      }

    updateUser(id: number, userPost:UserPost): Observable<UpdateResult>{
        return from(this.userPostRepository.update(id, userPost))

    }
    updateAllUser(id: number, userPost:UserPost): Observable<UpdateResult>{
        return from(this.userPostRepository.update(id, userPost))

    }
    deleteUser( id: number): Observable<DeleteResult>{
        return from(this.userPostRepository.delete(id))
    }
   
}
