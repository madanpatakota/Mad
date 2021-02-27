import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  Customers = [];

  getCustomers() {
    this.Customers = [
      { ID: 1, Languages: 'Kannada', Gender: 'Male', Name: 'Raj Kumar', State: 'Karnataka', Place: 'Bangolore' },
      { ID: 2, Languages: 'Telugu', Gender: 'Male', Name: 'Madan Reddy', State: 'Andhra', Place: 'Kadapa' },
      { ID: 3, Languages: 'Tamil', Gender: 'Male', Name: 'Arun', State: 'Chennai', Place: 'Madhuri' },
      { ID: 4, Languages: 'Malayalam', Gender: 'Female', Name: 'Lakshmi', State: 'Kerala', Place: 'Trivendram' }];
    return this.Customers;
  }


  getUpdates() {
    return
    `Genpact CDO decodes how digital transformation can make
     enterprises stronger in post-Covid world`;
  }

}
