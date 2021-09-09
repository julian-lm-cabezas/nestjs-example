import { ApiProperty } from '@nestjs/swagger';

export class OrderLine {
    @ApiProperty()
    productCode: string;
    @ApiProperty()
    ean: string;
    @ApiProperty()
    productDesignation: string;
    @ApiProperty()
    quantity: number;
}