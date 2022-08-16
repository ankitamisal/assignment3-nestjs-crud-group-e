import { Body, Controller, Post } from '@nestjs/common';
import { UserPost } from './user/models/post.interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
constructor(private userService: UserService) {}

@Post()
create(@Body() post: UserPost):Observable<UserPost>{
    return this.userService.createPost(post)
}

}
