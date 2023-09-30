import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ui-price',
    templateUrl: './ui-price.component.html',
    styleUrls: ['./ui-price.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPriceComponent implements OnInit {
    @Input() price: number = 0;
    @Input() discount: number = 0;

    public priceWithDiscount: number = 0;

    public get isDiscount(): boolean {
        return this.discount > 0;
    }

    public ngOnInit() {
        if (this.isDiscount) {
            this.priceWithDiscount = this.price - (this.price * this.discount) / 100;
        }
    }
}
