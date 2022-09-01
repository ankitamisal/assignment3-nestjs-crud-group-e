import { Body, Controller, Get, Post } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { UserRoleA } from './entity/userRole.entity';

import { UserRoleService } from './user-role.service';

@Controller('user-role')
export class UserRoleController {
    constructor(private userroleService:UserRoleService){}
    
    @Post()

    create(@Body() usersrole:UserRoleA): Observable<UserRoleA>{
        return this.userroleService.createRole(usersrole) //this.userroleService.createRole(usersrole)
    }
    @Get()

    findAll() {
        return this.userroleService.findAll();
    }
}
