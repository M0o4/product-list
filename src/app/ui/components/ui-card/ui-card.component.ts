import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ui-card',
    templateUrl: './ui-card.component.html',
    styleUrls: ['./ui-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent implements OnInit {
    @Input() imgUrl: string = '';
    @Input() name: string = '';
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
