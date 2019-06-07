import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor() {}
    
    getMessage(id?:string){
        if(id)
            return `This action returns a #${id} cat`;
        else
            return 'This action returns all cats';
    }
}