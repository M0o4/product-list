import { Injectable } from '@angular/core';

import { IProduct } from '../../../api/interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    private readonly PRODUCTS_KEY: string = 'products';
    public saveProduct(product: IProduct): void {
        const products = this.getProducts();

        localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify([...products, product]));
    }

    public getProducts(): IProduct[] {
        const products = localStorage.getItem(this.PRODUCTS_KEY);

        if (!products) {
            return [];
        }

        return JSON.parse(products);
    }
}
