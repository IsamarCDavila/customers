import { Component, OnInit } from '@angular/core';
import { faChartBar, faListAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  faChartBar = faChartBar;
  faListAlt = faListAlt;
  faEdit = faEdit;
  constructor() { }

  ngOnInit() {
  }

}
