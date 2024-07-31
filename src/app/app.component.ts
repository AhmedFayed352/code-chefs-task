import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoryComponent } from './components/category/category.component';
import { LoadingScreenComponent } from "./components/loading-screen/loading-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, CategoryComponent, RouterOutlet, LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code-chefs-task';
}
