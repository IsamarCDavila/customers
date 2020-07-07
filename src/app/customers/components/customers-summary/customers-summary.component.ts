import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Observable } from 'rxjs';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customers-summary',
  templateUrl: './customers-summary.component.html',
  styleUrls: ['./customers-summary.component.css']
})
export class CustomersSummaryComponent implements OnInit {

  total$: Observable < number > ;
  media$: Observable < number > ;
  standarddeviation$: Observable < number > ;
  faChartBar = faChartBar;

  constructor(
    private customers: CustomersService
  ) { }

  ngOnInit(): void {
    
    this.total$ = this.customers.totalCustomers$;
    this.media$ = this.customers.media$;
    this.standarddeviation$ = this.customers.standarddeviation$;
  }

}
