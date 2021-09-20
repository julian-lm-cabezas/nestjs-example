import { Test } from '@nestjs/testing';
import { OrderController } from './orders.controller';
import { OrderQueryService } from '../application/queryServices/order.query.service';
import { OrderCommandService } from '../application/commandServices/order.command.service';
import { Order } from '../domain/models/entities/order'
describe('OrdersController', () => {
  let controller: OrderController;
  let queryService: OrderQueryService;
  let commandService: OrderCommandService;

  const result: Order = {_id: null, orderNumber: 123456, storeCode:2, orderType:'PC',lines:[] };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [OrderController],
        providers: [{
          provide: OrderQueryService,
          useValue: {
            findAll: ()=>Promise.resolve([result]),
            findById: val => Promise.resolve(result)
          }
        },
        {
          provide: OrderCommandService,
          useValue: {

          }
        }],
      }).compile();

      queryService = moduleRef.get<OrderQueryService>(OrderQueryService);
      commandService = moduleRef.get<OrderCommandService>(OrderCommandService);
      controller = moduleRef.get<OrderController>(OrderController);
  });

  it('findAll -> should return an array of orders', async () => {
    expect(await controller.findAll()).toStrictEqual([result]);
  });
  it('FindOne -> should return an order', async () => {
    expect(await controller.findOne(null)).toBe(result);
  });
});