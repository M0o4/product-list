import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsGridComponent } from './components/products-grid.component';
import { UiModule } from '../../ui/ui.module';

@NgModule({
    imports: [CommonModule, UiModule],
    declarations: [ProductsGridComponent],
    exports: [ProductsGridComponent],
})
export class ProductsGridModule {}
