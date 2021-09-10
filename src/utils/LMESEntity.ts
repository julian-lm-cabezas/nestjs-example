import { ObjectIdColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';

export class LMESEntity{
    //add Api property to show attributes in Schema
    // defines property as ObjectId
    @ApiProperty()
    @ObjectIdColumn()
    _id: ObjectID;
;
}