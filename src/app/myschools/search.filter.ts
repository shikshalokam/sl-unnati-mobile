import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'searchSchool'
})
export class SearchSchool implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        debugger
        return items.filter(item => {
                if (item.name.toLowerCase().includes(searchText)) {
                    return item.name.toLowerCase().includes(searchText);
                }
                if (item.title.toLowerCase().includes(searchText)) {
                    return item.title.toLowerCase().includes(searchText);
                }
        });
    }
}
