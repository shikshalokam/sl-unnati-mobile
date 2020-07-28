import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'searchCategory'
})

export class SearchCategory implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(item => {
            if (item.title.toLowerCase().includes(searchText)) {
                return item.title.toLowerCase().includes(searchText);
            }
        });
    }
}

