import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroResponse: string = '';
  

  constructor(private heroService: HeroService) {}

  

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (response: any) => {
      this.heroResponse = response.message;
    },
    (error) => {
      console.error('Error fetching heroes:', error);
    });
  }
}
