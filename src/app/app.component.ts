import { Component } from '@angular/core';
import { faSearch, faBell, faUser, faFlask } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customers-admin';
  faUser = faUser;
  faFlask = faFlask;
}
