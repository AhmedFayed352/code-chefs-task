import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor , NgIf, SearchPipe, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  allCategoryItems: ICategory[] = [];
  searchItem = '';

  constructor(private _CategoryService: CategoryService) {}

  ngOnInit(): void {
    this._CategoryService.getCategories().subscribe({
      next: (response) => {
        this.allCategoryItems = response;
        console.log(this.allCategoryItems);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

export interface ICategory {
  id:number;
  name:string;
  image: string;
  description: string;
  isDelete: boolean;
}