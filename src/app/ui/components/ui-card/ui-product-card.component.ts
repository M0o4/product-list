import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from '../../../core/api/interfaces/product.interface';

@Component({
    selector: 'ui-card',
    templateUrl: './ui-product-card.component.html',
    styleUrls: ['./ui-product-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiProductCardComponent {
    @Input() product: IProduct | undefined;

    constructor(private readonly router: Router) {}

    public onClick(): void {
        this.router.navigate([`products/product-details/`, this.product?.id]);
    }
}
