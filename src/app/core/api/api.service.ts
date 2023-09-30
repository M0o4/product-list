import { delay, map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { mockProducts } from '../common/mock/mock-data';
import { IProduct } from './interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ApiService {
    public getProductList(): Observable<IProduct[]> {
        return of(mockProducts).pipe(delay(1500)); // artificial delay
    }

    public getProductById(id: number): Observable<IProduct> {
        return of(mockProducts).pipe(
            delay(1500), // artificial delay
            map((res) => {
                const product = res.find((item) => item.id === id);
                if (!product) {
                    throw new Error('404 Product not found');
                }

                return product;
            }),
        );
    }
}
