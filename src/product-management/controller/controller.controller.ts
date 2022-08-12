import { Controller, Get } from '@nestjs/common';

@Controller('controller')
export class ControllerController {
    @Get()
    hello(){
        return "This is come from controller file"
    }
}
