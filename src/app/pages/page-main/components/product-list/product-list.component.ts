import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

import { IProduct } from '../../../../core/api/interfaces/product.interface';
import { ProductService } from '../../../../core/api/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
    public readonly products$: BehaviorSubject<IProduct[] | null> = new BehaviorSubject<IProduct[] | null>(null);

    private readonly destroy$: Subject<void> = new Subject<void>();

    constructor(
        private readonly apiService: ProductService,
        private readonly router: Router,
    ) {}

    public ngOnInit() {
        this.apiService
            .getProductList()
            .pipe(takeUntil(this.destroy$))
            .subscribe(
                (res) => {
                    if (!res) {
                        this.router.navigate(['404']);
                        return;
                    }

                    this.products$.next(res);
                },
                () => {
                    this.router.navigate(['404']);
                },
            );
    }
}
