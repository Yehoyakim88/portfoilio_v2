import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  scrollUp() {
    window.scrollTo(0, 0);
  }

  openDropDownMenu() {
    let dropdown:HTMLElement = document.getElementById('dropdown-menu') as HTMLElement;
    let burger:HTMLElement = document.getElementById('burger-menu-image') as HTMLElement;
    dropdown.classList.remove('d-none');
    burger.classList.add('d-none');
  }

  closeDropDownMenu() {
    let dropdown:HTMLElement = document.getElementById('dropdown-menu') as HTMLElement;
    let burger:HTMLElement = document.getElementById('burger-menu-image') as HTMLElement;
    dropdown.classList.add('d-none');
    burger.classList.remove('d-none');

  }
}
