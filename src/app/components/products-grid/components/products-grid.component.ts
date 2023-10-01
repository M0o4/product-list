import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../../core/api/interfaces/product.interface';

@Component({
    selector: 'app-products-grid',
    templateUrl: './products-grid.component.html',
    styleUrls: ['./products-grid.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsGridComponent {
    @Input() products: IProduct[] = [];
}
