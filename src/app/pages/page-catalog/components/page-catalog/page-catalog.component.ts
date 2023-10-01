import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, map, Subject, switchMap, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../../../../core/api/interfaces/product.interface';
import { ProductService } from '../../../../core/api/product.service';

@Component({
    selector: 'app-page-catalog',
    templateUrl: './page-catalog.component.html',
    styleUrls: ['./page-catalog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCatalogComponent implements OnInit, OnDestroy {
    public get isProductsEmpty(): boolean {
        return !(this.products$.value && this.products$.value?.length > 0);
    }

    public readonly products$: BehaviorSubject<IProduct[] | null> = new BehaviorSubject<IProduct[] | null>(null);

    private readonly destroy$: Subject<void> = new Subject<void>();

    constructor(
        private readonly productService: ProductService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
    ) {}

    public ngOnInit(): void {
        this.activatedRoute.queryParams
            .pipe(
                switchMap((params) => {
                    this.products$.next(null);
                    if (!params['search']) {
                        throw new Error('404 search params not found');
                    }

                    const search: string = params['search'];

                    return this.productService.getProductList().pipe(
                        map((res) => {
                            return this.filterProducts(res, search);
                        }),
                    );
                }),
                takeUntil(this.destroy$),
            )
            .subscribe(
                (res) => {
                    this.products$.next(res);
                },
                () => {
                    this.router.navigate(['404']);
                },
            );
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private filterProducts(products: IProduct[], filterBy: string): IProduct[] {
        return products.filter((item) => {
            return (
                item.name.toLowerCase().includes(filterBy.toLowerCase()) ||
                item.categories.some((item) => {
                    return item.name.toLowerCase().includes(filterBy.toLowerCase());
                })
            );
        });
    }
}
