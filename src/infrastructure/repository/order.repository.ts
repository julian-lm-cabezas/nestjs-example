import {Order} from 'src/domain/models/entities/order'
import {LMESRespository} from 'src/utils/LMESRepository'
import { EntityRepository } from 'typeorm'
@EntityRepository(Order)
export class OrderRepository extends LMESRespository<Order>{ }