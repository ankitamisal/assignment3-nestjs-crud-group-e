import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, observable } from 'rxjs';
import { UserRoleA } from 'src/user-role/entity/userRole.entity';
import { UserService } from 'src/user/models/user.service';
import { Repository } from 'typeorm';
import { RoleDto } from './dto/usedrole.dto';

@Injectable()
export class UserRoleService {

    constructor(
        @InjectRepository(UserRoleA)
        private readonly userRoleRepository:Repository<UserRoleA>,
        // private UserRoleService: UserService,
){}      
    createRole(usersrole:RoleDto):Observable<RoleDto>{
       return from(this.userRoleRepository.save(usersrole)) // return from(this.userRoleRepository.save(usersrole))
    }

    @Get()

    findAll():Observable<UserRoleA[]> {
        return from (this.userRoleRepository.find())
    }
}
