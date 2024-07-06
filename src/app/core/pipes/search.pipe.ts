import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(notes: any[], term: string): any[] {
    return notes.filter((n) =>
      n.title.toLowerCase().includes(term.toLocaleLowerCase())
    );
  }
}
