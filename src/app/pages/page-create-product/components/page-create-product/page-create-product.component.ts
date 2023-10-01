import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from '../../../../core/api/interfaces/product.interface';
import { LocalStorageService } from '../../../../core/common/services/local-storage/local-storage.service';

@Component({
    selector: 'app-page-create-product',
    templateUrl: './page-create-product.component.html',
    styleUrls: ['./page-create-product.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCreateProductComponent {
    public readonly IMG: string = 'img';
    public readonly NAME: string = 'name';
    public readonly PRICE: string = 'price';
    public readonly DISCOUNT: string = 'discount';
    public readonly DESCRIPTION: string = 'description';
    public readonly CATEGORIES: string = 'categories';

    public get categories(): string[] {
        return this.form.get(this.CATEGORIES)?.value;
    }

    public form: FormGroup;

    constructor(
        private readonly localStorageService: LocalStorageService,
        private readonly router: Router,
    ) {
        this.form = new FormGroup({
            img: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            price: new FormControl('', [Validators.required]),
            discount: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            categories: new FormControl([], [Validators.required]),
        });
    }

    public getFormControl(controlName: string): FormControl {
        return this.form.get(controlName) as FormControl;
    }

    public addCategory($event: MatChipInputEvent): void {
        const value = ($event.value || '').trim();
        if (!value) {
            return;
        }

        $event.chipInput?.clear();
        this.getFormControl(this.CATEGORIES)?.value.push(value);
        this.getFormControl(this.CATEGORIES).updateValueAndValidity();
    }

    public removeCategory(category: string): void {
        const index = this.getFormControl(this.CATEGORIES)?.value.indexOf(category);

        if (index < 0) {
            return;
        }

        this.getFormControl(this.CATEGORIES)?.value.splice(index, 1);
        this.getFormControl(this.CATEGORIES).updateValueAndValidity();
    }

    public onAddProduct(): void {
        this.form.updateValueAndValidity();
        if (this.form.invalid) {
            return;
        }

        const { name, img, price, discount, description, categories } = this.form.value;

        const product: IProduct = {
            id: Date.now(),
            name,
            img,
            price,
            discount,
            description,
            categories: categories.map((item: string) => ({ name: item })),
        };

        this.localStorageService.saveProduct(product);
        this.router.navigate(['/']);
    }
}
