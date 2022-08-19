import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty()
    book_id: number;
    @ApiProperty()
    book_name: string;
    @ApiProperty()
    author: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    book_image: string;
    @ApiProperty()
    book_number: string;
}
