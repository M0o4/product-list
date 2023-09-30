import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ApiService } from '../../core/api/api.service';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { IProduct } from '../../core/api/interfaces/product.interface';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
    public readonly products$: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

    private readonly destroy$: Subject<void> = new Subject<void>();

    constructor(private readonly apiService: ApiService) {}

    public ngOnInit() {
        this.apiService
            .getProductList()
            .pipe(takeUntil(this.destroy$))
            .subscribe(
                (res) => {
                    if (!res) {
                        return;
                    }

                    this.products$.next(res);
                },
                (error) => {},
            );
    }
}
