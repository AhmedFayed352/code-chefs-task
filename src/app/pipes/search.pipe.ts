import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from '../components/category/category.component';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(categoryList: ICategory[], searchTerm: string): ICategory[] {
    return categoryList.filter((category) => category.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
