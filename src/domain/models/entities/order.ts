import { OrderLine } from "../vos/orderLine";

export interface Order {
    id: string,
    orderNumber: number;
    storeCode: number;
    orderType: string;
    orderLines: OrderLine[];
}