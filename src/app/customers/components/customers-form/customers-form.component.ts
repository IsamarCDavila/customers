
import { CustomersService } from './../../services/customers.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit {

  now = new Date(Date.now());
  form: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      date: new FormControl(formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en'), [Validators.required])
  });

  status$: Observable < string > ;

  constructor(
    private customers: CustomersService
  ) { }

  ngOnInit() {
    this.status$ = this.customers.formStatus$;
  }

  isInvalid(name) {
      return this.form.controls[name].invalid
        && (this.form.controls[name].dirty || this.form.controls[name].touched)
  }

  async submit() {
      this.form.disable()
      await this.customers.create({ ...this.form.value
      })
      this.form.reset()
      this.form.enable()
  }

}
