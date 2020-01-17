import { Pipe, PipeTransform } from '@angular/core';
import { HomeService } from '../home/home.service';
@Pipe({
  name: 'searchProjects'
})
export class FilterPipe implements PipeTransform {
  constructor(public homeService: HomeService) { }
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) {
      return items;
    }
    searchText = searchText.trim();
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      if (it.programName) {
        let data = it.title.toLowerCase().includes(searchText) || it.programName.toLowerCase().includes(searchText);
        this.homeService.setCount(data);
      }
      if (it.programName) {
        if (it.title.toLowerCase().includes(searchText) || it.programName.toLowerCase().includes(searchText)) {
          return it.title.toLowerCase().includes(searchText) || it.programName.toLowerCase().includes(searchText);
        }
      } else {
        if (it.title.toLowerCase().includes(searchText)) {
          return it.title.toLowerCase().includes(searchText);
        }
      }

    });
  }
}