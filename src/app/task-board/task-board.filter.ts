import { Pipe, PipeTransform } from '@angular/core';
import { HomeService } from '../home/home.service';
@Pipe({
  name: 'searchTasks'
})
export class TaskBoardPipe implements PipeTransform {
  constructor(public homeService: HomeService) { }
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) {
      return items;
    }
    searchText = searchText.trim();
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      if (it) {
        let data = it.title.toLowerCase().includes(searchText);
        this.homeService.setCount(data);
      }
    });
  }
}