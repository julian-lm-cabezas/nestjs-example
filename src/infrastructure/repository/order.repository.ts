import { EntityRepository, Repository } from 'typeorm';
import {Order} from 'src/domain/models/entities/order'

@EntityRepository(Order)
export class OrderRepository extends Repository<Order>{}