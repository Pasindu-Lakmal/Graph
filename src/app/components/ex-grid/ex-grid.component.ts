import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-ex-grid',
  templateUrl: './ex-grid.component.html',
  styleUrls: ['./ex-grid.component.css'],
})
export class ExGridComponent implements AfterViewInit {
  @ViewChild('pivot', { static: false }) pivot;

  public pivotGrid;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.pivotGrid = $(this.pivot.nativeElement)
      .kendoPivotGrid({
        filterable: true,
        columnWidth: 120,
        height: 570,
        dataSource: {
          data: products,
          schema: {
            model: {
              fields: {
                ProductName: { type: 'string' },
                UnitPrice: { type: 'number' },
                UnitsInStock: { type: 'number' },
                Discontinued: { type: 'boolean' },
                CategoryName: { field: 'Category.CategoryName' },
              },
            },
            cube: {
              dimensions: {
                ProductName: { caption: 'All Products' },
                CategoryName: { caption: 'All Categories' },
                Discontinued: { caption: 'Discontinued' },
              },
              measures: {
                Sum: { field: 'UnitPrice', format: '{0:c}', aggregate: 'sum' },
                Average: {
                  field: 'UnitPrice',
                  format: '{0:c}',
                  aggregate: 'average',
                },
              },
            },
          },
          columns: [
            { name: 'CategoryName', expand: true },
            { name: 'ProductName' },
          ],
          rows: [{ name: 'Discontinued', expand: true }],
          measures: ['Sum'],
        },
      })
      .data('kendoPivotGrid');
  }

  // ngOnDestroy(): void {
  //   $.destroy(this.elementRef.nativeElement);
  // }
}
