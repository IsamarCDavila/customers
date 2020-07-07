import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersPageComponent } from './components/customers-page/customers-page.component';
const routes: Routes = [
  { path: '',   redirectTo: '/customers', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: CustomersPageComponent },
  { path: 'customers', component: CustomersPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
