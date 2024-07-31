import { Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [
    {path: "" , redirectTo: "category", pathMatch: "full"},
    {path: "category" , component: CategoryComponent}
];
