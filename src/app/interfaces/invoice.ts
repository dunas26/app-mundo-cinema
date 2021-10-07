import { Product } from "./product";
import { Ticket } from "./ticket";

export interface Invoice {
    ticket: Ticket[];
    product: Product[];
}
