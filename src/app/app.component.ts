import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationEnd, NavigationStart} from '@angular/router';
import {CategoryService} from "./data/services/category.service";
import {AuthService} from "./core/services/AuthService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-start-prototype';
  keyWorld: any;

  connectedUser$ = this._authService.connectedUser$;

  isLogged() : boolean{
   return this._authService.isLoggedIn();
  }

  constructor(
    private router: Router,
    private _categoryService : CategoryService,
    private _authService: AuthService,
  ) {}

  categories$ = this._categoryService.getOneByTypeAndUri$('');
  showDropdown() {
    let dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("show-dropdown");
  };

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Ajoutez la classe `transition-scroll` lorsque la navigation commence
        document.body.classList.add('transition-scroll');
      }
      else  if (event instanceof NavigationEnd) {
        if ('scrollBehavior' in document.documentElement.style) {
          // La propriété `scrollBehavior` est prise en charge par le navigateur, on peut donc utiliser l'option `behavior: 'smooth'`
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // La propriété `scrollBehavior` n'est pas prise en charge, on utilise une autre approche pour réaliser un défilement doux
          const scrollableElement = document.scrollingElement || document.documentElement;
          scrollableElement.scrollTop = 0;
        }
        document.body.classList.remove('transition-scroll');
      }
    });
  }


  applyFilter() {
    this.router.navigate(['/recherche/'], {
      queryParams: {
        keyWorld: this.keyWorld,
      }
    });
  }

  handleKeyUp($event: KeyboardEvent) {
    if ($event.key === 'Enter') {
      this.applyFilter();
    }
  }

}
