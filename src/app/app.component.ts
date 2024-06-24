import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetsComponent} from "./widgets/widgets.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, WidgetsComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foldable-widgets-app';
}
