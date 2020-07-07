import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { Customers } from '../models/customers';

@Injectable({
    providedIn: 'root'
})
export class CustomersFirestore extends FirestoreService<Customers> {

    protected basePath: string = 'customers';

}