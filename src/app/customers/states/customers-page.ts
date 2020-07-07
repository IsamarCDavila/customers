import { Customers } from '../models/customers';
export interface CustomersPage {

    loading: boolean;
    customers: Customers[];
    formStatus: string; // saving o saved

    totalCustomers: number;
    media: number;
    standarddeviation: number;
}