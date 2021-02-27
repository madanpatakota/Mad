import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SchoolService } from './school.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRouting';

  subscription: Subscription;
  constructor(private schoolService: SchoolService) {
    this.subscription = this.schoolService.IsAutheticated.subscribe((param) => {
      debugger;
      console.log(param + " IsAuthenticataed subscription App component");
    });

  }
}
