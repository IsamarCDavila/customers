import { CustomersPage } from '../states/customers-page';
import { StoreService } from 'src/app/core/services/store.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CustomersPageStore extends StoreService<CustomersPage> {
    protected store: string = 'customers-page';

    constructor() {
        super({
            loading: true,
            customers: [],
            totalCustomers: 0,
            media: 0,
            standarddeviation: 0
        })
    }
}