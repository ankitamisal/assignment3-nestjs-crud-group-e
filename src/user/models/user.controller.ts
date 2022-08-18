import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserPost } from './post.interface';
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
find(id:number) {
    return this.userService.find(id);
}
@Get()
findAll() : Observable <UserPost[]> {
    return this.userService.findAll();
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
