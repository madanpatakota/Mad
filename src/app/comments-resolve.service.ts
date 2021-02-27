import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolveService implements Resolve<string> {
  resolve() {
    return `A school is a place where people go to learn about topics such as reading,
     writing and mathematics. In a school or university, one or more teachers help students 
     to learn. ... For young children, one teacher is able to teach all subjects.
     "Teachers for older students are often specialized and they only teach a few subjects.`;
  }

  constructor() { }
}
