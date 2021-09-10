import { ObjectIdColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class LMESEntity{
    //add Api property to show attributes in Schema
    // defines property as ObjectId
    @ApiProperty()
    @ObjectIdColumn()
    _id: string;
}