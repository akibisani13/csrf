import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HttpHeaders } from '@angular/common/http';
import { CsrfTokenService} from '../Csrf.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  heroResponse: string = '';
  backendMessage: string = '';

  constructor(private heroService: HeroService, private csrfTokenService:CsrfTokenService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe((response: string) => this.heroResponse = response);
  }


  addHero(heroName: string): void {
    

    this.csrfTokenService.getCsrfToken('http://localhost:9000/account/generate-csrf-token')
    .then((c:string)=>{
      console.log('CSRF Token:------>', c);
      const headers = new HttpHeaders({
        'X-XSRF-TOKEN': c,
        // Add any other headers you need here
      });
      // Make a POST request to your backend API
    this.heroService.addHero(heroName,  headers ).subscribe(
      (newHero: any) => {
        // Add the new hero to the heroes array
        this.heroes.push(newHero);
        console.log("==*****"+newHero.message)
        this.backendMessage = newHero.message;
      },
      (error) => {
        console.error('Error adding hero:', error);
      }
    );
    })

  }

}
