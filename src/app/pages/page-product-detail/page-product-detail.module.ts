import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { NgModule } from '@angular/core';

import { ProductDetailComponent } from './components/product-detail.component';
import { PageProductDetailRoutingModule } from './page-product-detail-routing.module';
import { UiModule } from '../../ui/ui.module';

@NgModule({
    imports: [CommonModule, PageProductDetailRoutingModule, MatProgressBarModule, NgOptimizedImage, UiModule, MatChipsModule],
    declarations: [ProductDetailComponent],
    exports: [ProductDetailComponent],
    providers: [],
})
export class PageProductDetailModule {}
