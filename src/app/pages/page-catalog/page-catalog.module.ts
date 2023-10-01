import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AsyncPipe, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsGridModule } from '../../components/products-grid/products-grid.module';
import { PageCatalogComponent } from './components/page-catalog/page-catalog.component';
import { PageCatalogRoutingModule } from './page-catalog-routing.module';

@NgModule({
    imports: [PageCatalogRoutingModule, NgIf, AsyncPipe, ProductsGridModule, MatProgressBarModule],
    declarations: [PageCatalogComponent],
    exports: [PageCatalogComponent],
})
export class PageCatalogModule {}
