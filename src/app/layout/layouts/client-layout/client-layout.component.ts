import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../data/services/category.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/AuthService";
import {VisitorStoreService} from "../../../features/visitor/store/visitor-store.service";

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private _visitorStoreService : VisitorStoreService,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {}

  categories$ = this._visitorStoreService.selectCategories$();
  showDropdown() {
    let dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("show-dropdown");
  };

  title = 'angular-start-prototype';
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


  logout() {
    this._authService.logout();
  }

}
