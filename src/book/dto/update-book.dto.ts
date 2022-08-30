import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UpdateBookDto {
        book_id: number;
        @IsNotEmpty()
        @IsString()
        book_name: string;
        @IsNotEmpty()
        @IsString()
        author: string; 
      @IsNotEmpty()
        price: number;
       @IsNotEmpty()
        @IsInt()
        book_number: number;
    
}
