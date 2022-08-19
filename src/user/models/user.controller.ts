import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserPost } from './post.interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import{ UpdateResult } from 'typeorm';
import{ DeleteResult } from 'typeorm';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';


@Controller('user')
export class UserController {
imagepath: string;
constructor(private userService: UserService) {}

@Post()

create(@Body() userPost: UserPost):Observable<UserPost>{
    userPost.Image = this.imagepath;

    return this.userService.createuser(userPost)
}
@Get(":id")
find(@Param('id') id:number) {
    return this.userService.find(id);
}
@Get()
findAll()  {
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
@Post('/images')
@UseInterceptors(
  FileInterceptor('image', {
    storage: diskStorage({
      destination: './images',
      filename: (req, image, callback) => {
        const uniqueSuffix =
          Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(image.originalname);
        // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename);
      },
    }),
  }),
)
handleupload(@UploadedFile() image: Express.Multer.File) {
  this.imagepath = image.path;
  console.log('image', image);
  console.log('path', image.path);
  return 'file upload API';
}
@Get('showimage/:image')
seeUploadedFile(@Param('image') image, @Res() res) {
  return res.sendFile(image, { root: './images' });

}
}
