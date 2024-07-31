import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MenuComponent } from '../../components/menu/menu.component';
import { InputComponent } from "../../components/input/input.component";
import { FeedComponent } from "../../components/feed/feed.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    FormsModule,
    InputComponent,
    FeedComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
}
