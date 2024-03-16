import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';
import {CategoryService} from "./data/services/category.service";
import {AuthService} from "./core/services/AuthService";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {HttpClient} from "@angular/common/http";
import {VisitorStoreService} from "./features/visitor/store/visitor-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  constructor(
    private router: Router,
    private _visitorStoreSelector : VisitorStoreService,
    private _authService: AuthService,
  ) {
    this._authService.getUserConnectedInfo();
  }


  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Ajoutez la classe `transition-scroll` lorsque la navigation commence
        document.body.classList.add('transition-scroll');
        // Loading.standard();
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
        // Loading.remove();
      }
    });

    //add event listener to sub-menu__item
    let subMenuItems = document.querySelectorAll('.sub-menu__item');
    subMenuItems.forEach(item => {
      item.addEventListener('click', () => {
        let subMenu = document.querySelector('.sub-menu');
        subMenu.classList.toggle('show-submenu');
      })
    });


  }

  categories$ =  this._visitorStoreSelector.selectCategories$();
  showDropdown() {
    let dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("show-dropdown");
  };

  title = 'afrofame';
  keyWorld: any;

  connectedUser$ = this._authService.connectedUser$;

  isLogged() : boolean{
    return this._authService.isLoggedIn();
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

  clickOnHasSubmenuIcon() {
    // const item = $event.target as HTMLElement;
    let item = document.querySelector('.has-submenu');
    const submenu = document.querySelector('.sub-menu');
    const icon = document.querySelector('#category-icon');
    submenu.classList.toggle('show-submenu');
    //remplace icon
    if (icon.classList.contains('ri-arrow-right-s-line')) {
      icon.classList.remove('ri-arrow-right-s-line');
      icon.classList.add('ri-arrow-down-s-line');
    }else{
      icon.classList.add('ri-arrow-right-s-line');
      icon.classList.remove('ri-arrow-down-s-line');
    }
  }

  toggleMenu() {
    const menu = document.querySelector('.nav__list');
    menu.classList.toggle('show-menu');
  }


  logout() {
    this._authService.logout();
  }

  //add
  goToCategory(category: string) {
    if (document.querySelector('.nav__list').classList.contains('show-menu')) {
      document.querySelector('.nav__list').classList.toggle('show-menu');
    }else{
      const submenu = document.querySelector('.sub-menu');
      submenu.classList.toggle('show-submenu');
    }
    this.router.navigate(['/categories/', category]);

  }
}
