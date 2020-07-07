import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersPageComponent } from './components/customers-page/customers-page.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersFormComponent } from './components/customers-form/customers-form.component';
import { CustomersSummaryComponent } from './components/customers-summary/customers-summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [CustomersPageComponent, CustomersListComponent, CustomersFormComponent, CustomersSummaryComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class CustomersModule { }
