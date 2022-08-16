import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserPost } from './user/models/post.interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import{ UpdateResult } from 'typeorm';
import{ DeleteResult } from 'typeorm';

@Controller('user')
export class UserController {
constructor(private userService: UserService) {}

@Post()
create(@Body() userPost: UserPost):Observable<UserPost>{
    return this.userService.createuser(userPost)
}
@Get()
findAll() :Observable <UserPost[]> {
    return this.userService.findAllUser();
}

@Patch(':id')
update(
    @Param('id') id:number,
    @Body() userPost: UserPost,
):Observable<UpdateResult> {
    return this.userService.updateUser(id, userPost)
}
@Delete(':id')
delete(
    @Param('id') id:number,
    
):Observable<DeleteResult>{
    return this.userService.deleteUser(id)
    
}

}
