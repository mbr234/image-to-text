import { Component } from '@angular/core';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    IconDirective,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  icons = { cilHome };
}
