import { NgModule } from '@angular/core';

import { PageCatalogComponent } from './components/page-catalog/page-catalog.component';
import { PageCatalogRoutingModule } from './page-catalog-routing.module';
import { AsyncPipe, NgIf } from '@angular/common';
import { ProductsGridModule } from '../../components/products-grid/products-grid.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    imports: [PageCatalogRoutingModule, NgIf, AsyncPipe, ProductsGridModule, MatProgressBarModule],
    declarations: [PageCatalogComponent],
    exports: [PageCatalogComponent],
})
export class PageCatalogModule {}
