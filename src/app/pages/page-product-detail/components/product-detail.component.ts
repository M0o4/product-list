import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../../../core/api/interfaces/product.interface';
import { ProductService } from '../../../core/api/product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    public readonly product$: BehaviorSubject<IProduct | null> = new BehaviorSubject<IProduct | null>(null);

    private readonly destroy$: Subject<void> = new Subject<void>();

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
        private readonly apiService: ProductService,
    ) {}

    public ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');

        if (!id) {
            this.router.navigate(['404']);
        }

        this.apiService
            .getProductById(Number(id))
            .pipe(takeUntil(this.destroy$))
            .subscribe(
                (res) => {
                    if (!res) {
                        this.router.navigate(['404']);
                        return;
                    }

                    this.product$.next(res);
                },
                () => {
                    this.router.navigate(['404']);
                },
            );
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public onCategoryClicked(category: string): void {
        this.router.navigate(['catalog'], { queryParams: { search: category } });
    }
}
