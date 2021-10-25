import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      width: 100%;
      max-width: 1170px;
      padding: 0 15px;
      margin: 0 auto;
    }
  `]
})
export class AppComponent {
}
