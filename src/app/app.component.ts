import { Component } from '@angular/core';
import {Sort} from '@angular/material';

export interface Header {
  description: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  discount: number;
  total: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:quotemark
  title = "Matt's Giftshop";

  header: Header[] = [
    {description: 'Guitar', quantity: 159, unitPrice: 6, subtotal: 24, discount: 4, total: 300},
    {description: 'Gold Coin', quantity: 159, unitPrice: 6, subtotal: 24, discount: 4, total: 300},
    {description: 'Boom Box', quantity: 159, unitPrice: 6, subtotal: 24, discount: 4, total: 300},
    {description: 'Bracelet', quantity: 159, unitPrice: 6, subtotal: 24, discount: 4, total: 300},
    {description: 'Laptop', quantity: 159, unitPrice: 6, subtotal: 24, discount: 4, total: 300},
    {description: 'Sucker', quantity: 159, unitPrice: 6, subtotal: 24, discount: 4, total: 300},
  ];

  sortedData: Header[];

  constructor() {
    this.sortedData = this.header.slice();
  }

  sortData(sort: Sort) {
    const data = this.header.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'description': return compare(a.description, b.description, isAsc);
        case 'quantity': return compare(a.quantity, b.quantity, isAsc);
        case 'unitPrice': return compare(a.unitPrice, b.unitPrice, isAsc);
        case 'subtotal': return compare(a.subtotal, b.subtotal, isAsc);
        case 'discount': return compare(a.discount, b.discount, isAsc);
        case 'total': return compare(a.total, b.total, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

