import { Component, OnInit } from '@angular/core';
import { Customers } from '../../models/customers';
import { Observable } from 'rxjs';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  loading$: Observable<boolean>;
  customers$: Observable<Customers[]>;
  noResults$: Observable<boolean>

  constructor(
    private customers: CustomersService
  ) { }

  ngOnInit() {
    this.loading$ = this.customers.loading$;
    this.noResults$ = this.customers.noResults$;
    this.customers$ = this.customers.customers$;
  }

  delete(customer: Customers) {
    this.customers.delete(customer.id);
  }

}
