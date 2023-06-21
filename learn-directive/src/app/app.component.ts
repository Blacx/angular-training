import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-directive';
  showElement: boolean = false;
  items: string[] = ['Satu', 'Dua', 'Tiga', 'Empat'];
  condition: string = 'medium';
  isDanger: boolean = true;
  color: string = 'green'; 
}
