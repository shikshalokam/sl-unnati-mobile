import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText)
    {
      return items;
    }
searchText = searchText.toLowerCase();
return items.filter( it => {
  if(it.title.toLowerCase().includes(searchText) || it.programName.toLowerCase().includes(searchText) || it.goal.toLowerCase().includes(searchText))
    {
      return it.title.toLowerCase().includes(searchText) || it.programName.toLowerCase().includes(searchText) || it.goal.toLowerCase().includes(searchText);
    }
    });
   }
}
