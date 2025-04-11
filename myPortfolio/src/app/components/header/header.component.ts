import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  template:`
  <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/about">About</a>
    <a routerLink="/project">Project</a>
    <a routerLink="/cv">Cv</a>
    <a routerLink="/contact">Contact</a>
  </nav>
  `
})
export class HeaderComponent {

}
