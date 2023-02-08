import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    this.prefersDark.addEventListener('change', (e) => console.log(e));
  }

  toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
    console.log('dark theme toggled');
  }

}
