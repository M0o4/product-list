import { delay, map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { mockProducts } from '../common/mock/mock-data';
import { IProduct } from './interfaces/product.interface';
import { LocalStorageService } from '../common/services/local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private readonly localStorageService: LocalStorageService) {}

    public getProductList(): Observable<IProduct[]> {
        return of(mockProducts).pipe(
            delay(1500), // artificial delay
            map((res) => {
                const localProducts = this.localStorageService.getProducts();

                return [...res, ...localProducts];
            }),
        );
    }

    public getProductById(id: number): Observable<IProduct> {
        return of(mockProducts).pipe(
            delay(1500), // artificial delay
            map((res) => {
                const localProducts = this.localStorageService.getProducts();
                const products = [...res, ...localProducts];
                const product = products.find((item) => item.id === id);
                if (!product) {
                    throw new Error('404 Product not found');
                }

                return product;
            }),
        );
    }
}
