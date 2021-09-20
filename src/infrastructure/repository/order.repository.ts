import {Order} from '../../domain/models/entities/order'
import {LMESRespository} from '../../utils/LMESRepository'
import { EntityRepository } from 'typeorm'
@EntityRepository(Order)
export class OrderRepository extends LMESRespository<Order>{ }