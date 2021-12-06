import { Component, Pipe, PipeTransform } from '@angular/core';

export interface IDataItem {
  name: string;
  id: number;
}

@Pipe({
  name: 'memoize',
})
export class Memoize implements PipeTransform {
  transform(item: IDataItem): string {
    const status = getStatus(item.id);

    return `${item.id} ${item.name} ${status}`;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-optimize';
  
  public selected: IDataItem | null = null;

  public data: IDataItem[] = [
    {
      name: "name 1",
      id: 1,
    },
    {
      name: "name 2",
      id: 2,
    },
    {
      name: "name 3",
      id: 3,
    },
    {
      name: "name 4",
      id: 4,
    },
  ];
 
  public onSelect(item: IDataItem): void {
    this.selected = item;
  }

}

// 3-rd party library
function getStatus(id: number): string {
  function fib(n: number): number {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  return `status ${fib(35 + id)}`;
}
