import { debounceTime, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { mockProducts } from '../common/mock/mock-data';
import { IProduct } from './interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ApiService {
    public getProductList(): Observable<IProduct[]> {
        return of(mockProducts).pipe(debounceTime(500)); // debounceTime for artificial delay
    }
}
