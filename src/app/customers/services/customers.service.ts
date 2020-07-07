import { CustomersPageStore } from './customers-page.store';
import { CustomersFirestore } from './customers.firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../models/customers';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  totalsuma: number;

  constructor(
    private firestore: CustomersFirestore,
    private store: CustomersPageStore
  ) { 

    
    this.totalsuma = 0;
    let execute1 = null;
    let cuadrados=[];
    
   
    this.firestore.collection$().pipe(
      tap(customers => {
        console.log('customers',customers);
        let sumatoria = this.media(customers);
        let promedio = sumatoria();

        let gExecute1 = this.process(promedio);
        let gExecute2 = gExecute1(customers);
        let gExecute3 = gExecute2();
        let gExecute4 = gExecute3();
        console.log('desviacion estandar', gExecute4);
        

          this.store.patch({
              loading: false,
              customers,
              totalCustomers: customers.length,
              media: promedio,
              standarddeviation: gExecute4,
          }, `customers collection subscription`)
      })
    ).subscribe()
  }

  
  media (customers){
    console.log('array', customers)
    let suma = 0;
    customers.forEach(function(item) {
      suma = suma+ parseInt(item.age);
    });
    this.totalsuma = suma;
    console.log('SUMA',suma);
    return function(){
      console.log('promedio', suma/customers.length);
      return suma/customers.length;
    }

  }

  process(promedio){
    console.log('FIRST PROCESSS------', promedio);
    let arrayModificado = [];
    let arrayCuadrados = [];
    return function(customers){
      customers.forEach(function(item) {
        arrayModificado.push(parseInt(item.age) - promedio);
      });
      return function(){
        console.log('tercer', promedio, 'modificado', arrayModificado);
        arrayModificado.forEach(function(item) {
          console.log('item', item, Math.pow(item, 2) );
          arrayCuadrados.push(Math.pow(item, 2));
        });
        return function(){
            let suma = 0;
            arrayCuadrados.forEach(function(item) {
              suma = suma+ item;
              
            });
            let x = suma/(arrayCuadrados.length-1);
            console.log('x',x);
            console.log('final', Math.sqrt(x));
            return Math.sqrt(x);
        }
      }
    }
  }


  get customers$(): Observable<Customers[]> {
      return this.store.state$.pipe(map(state => state.loading
          ? []
          : state.customers))
  }

  get loading$(): Observable<boolean> {
      return this.store.state$.pipe(map(state => state.loading))
  }

  get noResults$(): Observable<boolean> {
      return this.store.state$.pipe(
          map(state => {
              return !state.loading
                  && state.customers
                  && state.customers.length === 0
          })
      )
  }

  get formStatus$(): Observable<string> {
      return this.store.state$.pipe(map(state => state.formStatus))
  }

  get totalCustomers$(): Observable < number > {
      return this.store.state$.pipe(map(state => state.totalCustomers))
  }

  get media$(): Observable < number > {
      return this.store.state$.pipe(map(state => state.media))
  }

  get standarddeviation$(): Observable < number > {
      return this.store.state$.pipe(map(state => state.standarddeviation))
  }

  create(customers: Customers) {
      this.store.patch({
          loading: true,
          customers: [],
          formStatus: 'Saving...'
      }, "customer create")
      return this.firestore.create(customers).then(_ => {
          this.store.patch({
              formStatus: 'Saved!'
          }, "customer create SUCCESS")
          setTimeout(() => this.store.patch({
              formStatus: ''
          }, "customer create timeout reset formStatus"), 2000)
      }).catch(err => {
          this.store.patch({
              loading: false,
              formStatus: 'An error ocurred'
          }, "customer create ERROR")
      })
  }

  delete(id: string): any {
      this.store.patch({ loading: true, customers: [] }, "customer delete")
      return this.firestore.delete(id).catch(err => {
          this.store.patch({
              loading: false,
              formStatus: 'An error ocurred'
          }, "customer delete ERROR")
      })
  }

}
